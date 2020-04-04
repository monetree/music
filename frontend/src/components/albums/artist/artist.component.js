import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { Link } from "react-router-dom";


class Artist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          artists:[]
        }
    }


    componentDidMount(){
      let url = FormatUrl(`/artist`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
          this.setState({
              artists: res
          }, () => this.followedArtist())
      }).catch(err => {
          this.setState({
              artists: []
          })
      })

      
  }


  followArtist = (artist_id) => {
    let url = FormatUrl('/followedartists')
    fetch(url, {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          artist_id: artist_id,
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

  unfollowArtist = (artist_id) => {
    let url = FormatUrl(`/followedartists?artist_id=${artist_id}`)
    fetch(url, {
        method: 'delete'
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

  followedArtist = () => {
    let user_id = localStorage.getItem("login_id")
    let url = FormatUrl('/followedartists')
    fetch(url)
    .then(res => res.json())
    .then(res => {
      let followed_artists = []
      for(let i of res){
        if (i.user_id === parseInt(user_id)){
          followed_artists.push(i)
        }
      }
      let new_artist = []
      if(window.location.pathname === "/profile"){
        
        let artists = this.state.artists;
        for(let i of artists){
          for(let j of followed_artists){
            if(i.id === j.artist_id){
              i["follwed"] = true
              new_artist.push(i)
            }
          }
        }
  
        this.setState({
          artists: new_artist
        })
      } else {
        let artists = this.state.artists;
        for(let i of artists){
          for(let j of followed_artists){
            if(i.id === j.artist_id){
              i["follwed"] = true
            }
          }
        }
  
        this.setState({
          artists: artists
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
              <h1 className="component-title-color" >{window.location.pathname === "/profile" ? "Follwed artists" : "Artists to follow" }</h1>
              <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                  {
                    this.state.artists.map((artist, index) => (
                      <li key={index} className="tim-album-item grid-item ui logo branding">
                      <div className="tim-isotope-grid__img effect-active">
                        <img src={"http://localhost:5000/"+artist.photo} style={{ height:"200px" }} alt="album thumb" />
                      </div>
                      <div className="album_details_wrap">
                        <div className="album-info">
                          <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        
                    <h5 className="artist-name">{artist.name}</h5>
                          <Link to={`/songs?id=${artist.id}&name=artist`} className="tim-btn tim-btn-bgt pointer">Songs</Link><br/>
                          <a onClick={artist.follwed ? () => this.unfollowArtist(artist.id) : () => this.followArtist(artist.id)} className={artist.follwed ? "tim-btn tim-btn-bgt active-background pointer" : "tim-btn tim-btn-bgt pointer" }>{artist.follwed ? "Unfollow" : "Follow"}</a>
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


export default Artist;