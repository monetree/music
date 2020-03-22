import React from 'react';
import FormatUrl from "utils/UrlFormatter";

class ListedSongs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      likes:[]
    }
}


componentDidMount(){
  let url = FormatUrl(`/music`)
  fetch(url)
  .then(res => res.json())
  .then(res => {
    this.setState({
      songs: res
    }, () => this.getLikes())
  })
}



getLikes = () => {
  let url = FormatUrl(`/like`)
  fetch(url)
  .then(res => res.json())
  .then(res => {
    this.setState({
      likes:res
    }, () => this.handleSongs())
  }).catch(err => {
    console.log(err)
  })
}

handleSongs = () => {
  let user_id = localStorage.getItem("login_id")
  let songs = this.state.songs;
  let likes = this.state.likes;
  let mylikes = []
  for(let i of likes){
    if(i.user_id === parseInt(user_id)){
      mylikes.push(i.music_id)
    }
  }

    for(let i=0;i<songs.length; i++){
      if(mylikes.includes(songs[i]["id"])){
        songs.splice(i, 1)
      }
    }

    

   this.setState({
     songs: songs.splice(0, 6)
   })

  }



    handleListedSong = (id) => {
      let element = document.getElementById(id).childNodes[1];
      element.classList.remove("display-none")
      element.classList.add("display-block")
     }
 
     hideListedSong = (id) => {
       let element = document.getElementById(id).childNodes[1];
       element.classList.remove("display-block")
       element.classList.add("display-none")
     }

    render(){
        return (
            <div className="footer-blog-inner">
              {
                this.props.title ? 
                (
                  <h5 className="component-title-color" style={{ textAlign:'left' }}>{this.props.title}</h5>
                ):(
                  <h1 className="component-title-color" style={{ textAlign:'left' }}>Recomended songs</h1>
                )
              }
          
            <br/>
              {
                this.state.songs.map((song, index) => (
                  <div key={index} className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="l1" onMouseLeave={() => this.hideListedSong("l1")} onMouseOver={() => this.handleListedSong("l1")}>
                      <img src={"http://127.0.0.1:5000/"+ song.thumbnail} alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                <a className="meta">{song.name}</a>
                <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>{song.title}</p>
                      <span style={{ color:'lightgrey',fontSize:'12px' }}>
                      <i class="fa fa-play" aria-hidden="true"></i> 7.79m &nbsp;
                      <i class="fa fa-heart" aria-hidden="true"></i> 180k &nbsp;
                      <i class="fa fa-comment" aria-hidden="true"></i> &nbsp;956 &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;10.8k &nbsp;
                      </span>
                    </div>
                  </div>
                  <br/><br/>
                </div>

                ))
              }
           
               
              </div>
        )
    }
}


export default ListedSongs;