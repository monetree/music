import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import Player from '../../components/player/player.component';
import Albums from '../../components/albums/albums.component';
import FormatUrl from "utils/UrlFormatter";

class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          artist_profile_created: false
        }
        this.player = React.createRef()
    }

    componentDidMount(){
      let login_id = localStorage.getItem("login_id")
      if(!login_id){
        this.props.history.push("/login")
      }
    }

    playSong = (music) => {
      this.player.current.playSong(music)
    }


    componentDidMount(){
      let url = FormatUrl(`/artist`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        let user_ids = []
        let user_id = parseInt(localStorage.getItem("login_id"))
          for(let i of res){
              user_ids.push(i.user_id)
          }
          if(user_ids.includes(user_id)){
            this.setState({
              artist_profile_created : true
            })
          }
      }).catch(err => {
          this.setState({
            artist_profile_created: false
          })
      })
  }


    render(){
      const {artist_profile_created} = this.state;
        return (
          <div id="site">
            <MainHeader artist_profile_created={artist_profile_created} />
            <br/><br/><br/><br/>
            <Albums playSong={this.playSong} />
            <Player ref={this.player} />
          </div> 
        )
    }
}


export default Album;