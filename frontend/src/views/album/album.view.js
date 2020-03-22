import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import Player from '../../components/player/player.component';
import Albums from '../../components/albums/albums.component';


class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {

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

    render(){
        return (
          <div id="site">
            <MainHeader />
            <br/><br/><br/><br/>
            <Albums playSong={this.playSong} />
            <Player ref={this.player} />
          </div> 
        )
    }
}


export default Album;