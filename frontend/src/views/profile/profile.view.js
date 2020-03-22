import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import ListedSongs from '../../components/albums/listed-songs/listed-songs.component';
import Albums from '../../components/albums/albums.component';
import Player from 'components/player/player.component';


class Profile extends React.Component {
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


      playSong = (song) => {
        this.player.current.playSong(song)
      }

    render(){
        return (
            <div id="site">
            <MainHeader />
                <div className="container" style={{ marginTop:'1cm' }}>
                {/* <div className="row">
                    <div className="col-sm-4">
                        <ListedSongs title="Your Liked Songs" />
                    </div>
                    <div className="col-sm-4">
                        <ListedSongs title="Uploaded Contents" />
                    </div>
                    <div className="col-sm-4">
                        <br/><br/><br/><br/><br/>
                    <h5 className="component-title-color">Upload Album</h5>
                    <h5 className="component-title-color">Help</h5>
                    <h5 className="component-title-color">Contact Customer Support</h5>
                    </div>
                </div> */}

                <br/>
                <div className="row">
                <div className="col-sm-8">
                    <Albums playSong={this.playSong} />
                    </div>
                    <div className="col-sm-4">
                        <br/><br/><br/><br/>
                        <ListedSongs playSong={this.playSong} title="Recomended songs" />
                        {/* <ListedSongs title="Recomended artists" /> */}
                    </div>
                </div>
            </div>
                <Player ref={this.player} />
            </div> 
        )
    }
}

export default Profile;