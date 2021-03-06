import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import Popup from "reactjs-popup";
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Songs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          songs: [],
          playlists:[],
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
      this.getPlayLists()
    }

    getPlayLists = () => {
      let url = FormatUrl(`/playlist`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        let login_id = localStorage.getItem("login_id")
        let mylist = []
        for(let i of res){
          if(i.user_id === parseInt(login_id)){
            mylist.push(i)
          }
        }
        this.setState({
          playlists: mylist
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

      let new_songs = []
      if(window.location.pathname === "/profile"){
        for(let i of songs){
          for(let j of mylikes){
            if(i.id === j.music_id){
              if(j.type === 1){
                i["like"] = 1
                new_songs.push(i)
              } else if(j.type === 2) {
                i["like"] = 2
              } else {
                i["like"] = 0
              }
            }
          }
        }
  
       this.setState({
         songs: new_songs
       })
  
      } else {
        for(let i of songs){
          for(let j of mylikes){
            if(i.id === j.music_id){
              if(j.type === 1){
                i["like"] = 1
                new_songs.push(i)
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

    }

    playSong = (music) => {
      this.props.playSong(music)
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
                  <h1 className="component-title-color">{window.location.pathname === "/profile" ? "Liked songs" : "Songs" }</h1>
                )
              }
          
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
                        <span href="#" className="tim-btn tim-btn-bgt pointer" style={{ padding:'5px 15px' }} onClick={() => this.playSong(song)}>Play Now</span>
                      
                        <Popup
                            trigger={
                              <span href="#" className="tim-btn tim-btn-bgt pointer" style={{ padding:'5px 15px' }}>to playlist</span>
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

                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" style={{ padding:'5px 15px' }} className="tim-btn tim-btn-bgt pointer">Report</a>



                          
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
       
         
          
        )
    }
}


export default Songs;