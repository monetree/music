import React from 'react';
import FormatUrl from "utils/UrlFormatter";

class Songs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          songs: []
        }
    }


    componentDidMount(){
      let url = FormatUrl(`/music`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          songs: res
        })
      })
    }

    render(){
        return (
            <div className="tim-container d-flex justify-content-center">
            <div className="col-xl-12">
              {
                this.props.title ? 
                (
                  <h5 className="component-title-color" style={{ textAlign:'center' }}>Liked Albums</h5>
                ):(
                  <h1 className="component-title-color">Songs</h1>
                )
              }
          
              <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                {
                  this.state.songs.map((song, index) => (
                    <li key={index} className="tim-album-item grid-item ui logo branding">
                    <div className="tim-isotope-grid__img effect-active">
                      <img src={"http://127.0.0.1:5000/"+song.thumbnail} alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">{song.title}</h4>
                        <h5 className="artist-name">Song Artist Name</h5>
                        <span href="#" className="tim-btn tim-btn-bgt" onClick={() => this.props.playSong(song.music)}>Play Now</span>
                      </div>
                    </div>
                  </li>
                
                  ))
                }
                 
                </ul>
              </div>
            </div>
          </div>
       
         
          
        )
    }
}


export default Songs;