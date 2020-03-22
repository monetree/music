import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Popup from "reactjs-popup";


class Songs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      playlists:[],
      likes:[],
      music_ids: []
    }
}

getSongs = () => {
  let music_ids = this.state.music_ids;
  let url = FormatUrl(`/music`)
  fetch(url)
  .then(res => res.json())
  .then(res => {
    let new_music = []
    for(let i of res){
      if(music_ids.includes(i.id)){
        new_music.push(i)
      }
    }
    this.setState({
      songs: new_music
    })
  }).catch(err => {
    console.log(err)
  })
}

getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

componentDidMount(){
  let name = this.getParameterByName('name');
  let id = this.getParameterByName('id');
  if(name === "artist"){
    let url = FormatUrl(`/music`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
      let new_res = []
      for(let i of res){
        if(i.artist_id === parseInt(id)){
          new_res.push(i)
        }
      }
  
      this.setState({
        songs: new_res
      }, () => this.getLikes())
    })
  } else if (name === "playlist"){
    let url = FormatUrl(`/playlistlist`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
      let music_ids = []
      for(let i of res){
        
        if(i.playlist_id === parseInt(id)){
          music_ids.push(i.music_id)
        }
      }
      this.setState({
        music_ids: music_ids
      }, () => this.getSongs())
    })
  } else {
    let url = FormatUrl(`/music`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        songs: res
      }, () => this.getLikes())
    })
  }
}

getPlayLists = () => {
  let url = FormatUrl(`/playlist`)
  fetch(url)
  .then(res => res.json())
  .then(res => {
    this.setState({
      playlists: res
    })
  })
}


addToPlaylist = (music_id, playlist_id) => {
  let url = FormatUrl(`/playlistlist`)
  fetch(url, {
      method: 'post',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        music_id: music_id,
        playlist_id: playlist_id
      })
      })
  .then(res => res.json())
  .then(res => {
     if(res.code === 200){
      ToastsStore.success("success", 3000, "toast-box-pink")
     } else {
      ToastsStore.error("failed", 3000, "toast-box-pink")
     }
  }).catch(err => {
      ToastsStore.error("failed", 3000, "toast-box-pink")
  })
}

handleLike = (type, music_id) => {
  let url = FormatUrl(`/like`)
  fetch(url, {
      method: 'post',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        music_id: music_id,
        type: type,
        user_id:localStorage.getItem("login_id")
      })
      })
  .then(res => res.json())
  .then(res => {
     if(res.code === 200){
       this.componentDidMount()
      ToastsStore.success("success", 3000, "toast-box-pink")
     } else {
      ToastsStore.error("failed", 3000, "toast-box-pink")
     }
  }).catch(err => {
      ToastsStore.error("failed", 3000, "toast-box-pink")
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
      mylikes.push(i)
    }
  }


  for(let i of songs){
    for(let j of mylikes){
      if(i.id === j.music_id){
        if(j.type === 1){
          i["like"] = 1
        } else if(j.type === 2) {
          i["like"] = 2
        } else {
          i["like"] = 0
        }
      }
    }
  }

 this.setState({
   songs: songs
 })

}
  
    render(){
        return (
            <div id="site">

            <MainHeader ref={this.mainheader} />
            <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }}>
            <br/><br/><br/><br/>
            </div>
          
            <div className="tim-container d-flex justify-content-center">
            <div className="col-xl-12">

              

            <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                {
                  this.state.songs.map((song, index) => (
                    <li key={index} className="tim-album-item grid-item ui logo branding">
                    <div className="tim-isotope-grid__img effect-active">
                      <img src={"http://127.0.0.1:5000/"+song.thumbnail} style={{ height:"250px" }} alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">{song.title}</h4>
                        {/* <h5 className="artist-name">Song Artist Name</h5> */}
                        <span href="#" className="tim-btn tim-btn-bgt pointer" onClick={() => this.props.playSong(song.music)}>Play Now</span>
                        <br/>

                        <Popup
                            trigger={
                              <span href="#" className="tim-btn tim-btn-bgt pointer">to playlist</span>
                                    }
                            closeOnDocumentClick
                            modal
                        >{close => (
                            <div className="popupContainer">
                                <div className="popupheader">
                                  <h3 style={{ color:'#fff' }}><u>Add to playlist</u><button id="modal" className="popupClose pointer" onClick={close} style={{ background:'rgb(236, 106, 128)', color:'#fff', border:'none', borderRadius:'5px', marginLeft:'0.5cm' }}>Close</button></h3>
                                  <ul>
                                    {
                                      this.state.playlists.map((playlist, index) => (
                                      <li style={{ padding:'10px', color:'#fff', fontWeight:'bold', fontSize:'20px' }}>
                                        <span style={{ padding:'10px' }}>{playlist.name} 
                                          <i onClick={() => this.addToPlaylist(song.id, playlist.id)} title="add" class="fa fa-arrow-right pointer" style={{ margin:'0px 10px' }} aria-hidden="true"></i>
                                        </span>
                                      </li>
                                      ))
                                    }
                                   
                                  </ul>
                                

                                </div>
                            
                            </div>
                        )}

                        </Popup>



                          
                        <div style={{ color:'#fff', fontSize:'20px' }}>
                        <span>
                          <i onClick={song.like ? "" :() => this.handleLike(1, song.id)} style={{ margin:'0px 10px' }} class={song.like === 1 ? "fa fa-thumbs-up pointer active-color" :  "fa fa-thumbs-up pointer"} aria-hidden="true"></i>
                          <i onClick={song.like ? "" : () => this.handleLike(2, song.id)}  style={{ margin:'0px 10px' }} class={song.like === 2 ? "fa fa-thumbs-down pointer active-color" : "fa fa-thumbs-down pointer" } aria-hidden="true"></i>
                        </span>
                        </div>
                      </div>
                    </div>
                  </li>
                
                  ))
                }
                 
                </ul>
              </div>
         
              </div>
              </div>


                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}


export default Songs;