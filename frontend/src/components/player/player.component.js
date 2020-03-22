import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          playing: false,
          song: null,
          history:null,
          title:null
        }
    }


    handlePlayer = (id) => {
      let audio = document.getElementById(id); 
      let playing = this.state.playing
      if(!playing){
        // audio.play(); 
        this.setState({
          song: this.state.history,
          playing: true
        })
      } else {
        this.setState({
          history: this.state.song,
          song: null,
        })
        // audio.pause(); 
      }
      if(this.state.song){
          this.setState({
          playing:!this.state.playing
        })
      }

    }

    playSong = (song) => {
      this.setState({
        song: song.music,
        title: song.title,
        thumbnail: song.thumbnail
      }, () => this.addMusicToPlayer())
    }

    addMusicToPlayer = () => {
      // let audio = document.getElementById("playing_id"); 
      // let playing = this.state.playing
      // if(!playing){
      //   audio.play(); 
        this.setState({
          playing: true
        })
      // } else {
      //   this.setState({
      //     playing: false
      //   })
      //   audio.pause(); 
      // }
    }

    render(){
      const { playing } = this.state;
        return (
            <div className="header_player fixed-player">
            <div className="tim-container ">
              {/* Audio Player */}
              <div className="player-container">
                <div className="current-tracks">
                  <div id="main_player" className="jp-jplayer">
                    <img src={this.state.thumbnail ? "http://127.0.0.1:5000/"+this.state.thumbnail: "static/media/album/1.jpg" } alt="album thumb" />
                  </div>
                  <div id="nowPlaying">
        <h3 className="track-name">{this.state.title ? this.state.title : "No songs playing"}</h3>
                    {/* <span className="artist-name">The Weeknd</span> */}
                  </div>
                  {/* #nowPlaying */}
                </div>
                {/* /.current-tracks */}
      
                <div id="header_player" className="jp-audio" role="application" aria-label="media player">
                  <div className="jp-type-playlist clearfix">
                    <div className="jp-gui jp-interface">
                      <div className="jp-controls">
                        <button className="jp-previous" tabIndex={0}><i className="fa fa-backward" /></button>
                    
                        <button className="jp-play" tabIndex={0}><i className={playing ? "fa fa-pause" : "fa fa-play" } onClick={() => this.handlePlayer(this.state.song ? "playing_id" : "audio")} />
                          {/* {
                            this.state.song ? 
                            (
                              <audio id="playing_id">
                                <source src={"http://127.0.0.1:5000/"+ this.state.song} type="audio/mp3" />
                              </audio>
                            ):(
                              <audio id="audio" style={{ display:'none' }}>
                                <source src="static/media/audio/beach.mp3" type="audio/mp3" />
                              </audio>
                            )
                          } */}
                        </button>

                        <span style={{ display:'none' }}>
                        <ReactAudioPlayer
                          src={"http://127.0.0.1:5000/"+ this.state.song}
                          autoPlay
                          controls
                        />
                        </span>


                        <button className="jp-next" tabIndex={0}><i className="fa fa-forward" /></button>
                      </div>
                      {/* Display the track inside player */}
                      <div className="jp-progress">
                        <div className="jp-seek-bar">
                          <div className="jp-play-bar" />
                        </div>
                      </div>
                      <div className="jp-duration" role="timer" aria-label="duration" />
                      <div className="vel-wrap">
                        <button className="jp-mute" tabIndex={0}><i className="fa fa-volume-up" /></button> &nbsp;
                        <div className="jp-volume-bar">
                          <div className="jp-volume-bar-value" />
                        </div>
                      </div>
                      {/* /.vel-wrap */}
                      <button id="playlist-toggle" className><i className="fa fa-list" /></button>
                      {/* Playlist */}
                      <div className="jp-playlist">
                        <ul>
                          <li />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        )
    }
}


export default Player;


