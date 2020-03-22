import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { Link } from "react-router-dom";

class Genre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          playlists: []
        }
    }


    componentDidMount = () => {
      let url = FormatUrl(`/playlist`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          playlists: res
        }, () => this.getMyPlayList())
      }).catch(err => {
        console.log(err)
      })
  }


    uploadPLaylist = (playlist_id) => {
      let url = FormatUrl('/myplaylist')
      fetch(url, {
          method: 'post',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            playlist_id: playlist_id,
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


    getMyPlayList = () => {
      let user_id = localStorage.getItem("login_id")
      let url = FormatUrl('/myplaylist')
      fetch(url)
      .then(res => res.json())
      .then(res => {
        let playlists = this.state.playlists;
        let myplaylists = []
        for(let i of res){
          if(i.user_id === parseInt(user_id)){
            myplaylists.push(i)
          }
        }


        let new_playlist = []

        if(window.location.pathname === "/profile") {
          for(let i of playlists){
            for (let j of myplaylists){
              if(i.id === j.playlist_id){
                i["saved"] = true
                new_playlist.push(i)
              }
            }
          }
  
          this.setState({
            playlists: new_playlist
          })
        } else {
          for(let i of playlists){
            for (let j of myplaylists){
              if(i.id === j.playlist_id){
                i["saved"] = true
              }
            }
          }
  
          this.setState({
            playlists: playlists
          })
        }




      }).catch(err => {
        console.log(err)
      })
    }

    render(){
        return (
            <div className="tim-container d-flex justify-content-center">
            <div className="col-xl-12">
              <h1 className="component-title-color">{window.location.pathname === "/profile" ? "My Plylists" : "Plylists" }</h1>
              <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                  {
                    this.state.playlists.map((playlist, index) => (
                    <li key={index} className="tim-album-item grid-item ui logo branding">
                    <div className="tim-isotope-grid__img effect-active">
                      <img src={"http://127.0.0.1:5000/" + playlist.thumbnail}  style={{ height:"200px" }} alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
          
                        <h5 className="artist-name">{playlist.name}</h5>
                        <Link to={`/songs?id=${playlist.id}&name=playlist`} className="tim-btn tim-btn-bgt pointer">Songs</Link><br/>
                        <a className={playlist.saved ? "tim-btn tim-btn-bgt active-background" : "tim-btn tim-btn-bgt pointer" } onClick={playlist.saved  ? "" :() => this.uploadPLaylist(playlist.id)}>{playlist.saved ? "Saved" : "Save"}</a>
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


export default Genre;

