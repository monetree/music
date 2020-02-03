import React from 'react';


class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          playing: false
        }
    }


    handlePlayer = (id) => {
      let audio = document.getElementById(id); 
      let playing = this.state.playing
      if(!playing){
        audio.play(); 
      } else {
        audio.pause(); 
      }
      this.setState({
        playing:!this.state.playing
      })
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
                    <img src="static/media/album/1.jpg" alt="album thumb" />
                  </div>
                  <div id="nowPlaying">
                    <h3 className="track-name">Starboy</h3>
                    <span className="artist-name">The Weeknd</span>
                  </div>
                  {/* #nowPlaying */}
                </div>
                {/* /.current-tracks */}
      
                <div id="header_player" className="jp-audio" role="application" aria-label="media player">
                  <div className="jp-type-playlist clearfix">
                    <div className="jp-gui jp-interface">
                      <div className="jp-controls">
                        <button className="jp-previous" tabIndex={0}><i className="fa fa-backward" /></button>
                        <button className="jp-play" tabIndex={0}><i className={playing ? "fa fa-pause" : "fa fa-play" } onClick={() => this.handlePlayer("audio")} />
                          <audio id="audio" style={{ display:'none' }}>
                            <source src="static/media/audio/beach.mp3" type="audio/mp3" />
                          </audio>
                        </button>
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