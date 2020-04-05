import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import FormatUrl from "utils/UrlFormatter";

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          playing: false,
          song: null,
          history:null,
          title:null,
          songs:[],
          current_song_id: null
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
        this.setState({
          playing: true
        })
    }

    getSongs = (music_ids) => {
      let url = FormatUrl(`/music`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        if(!res.length){
          return
        }
        let songs = []
        for(let i of res){
          if(music_ids.includes(i.id)){
            songs.push(i)
          }
        }

        this.setState({
          songs: songs,
          title: songs[0]["title"],
          song: songs[0]["music"],
          thumbnail: songs[0]["thumbnail"],
          current_song_id:songs[0]["id"]
        }, () => this.addMusicToPlayer())
      }).catch(err => {
        console.log(err)
      })
    }

    playPLaylist = (playlist_id) => {
      let url = FormatUrl(`/playlistlist`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          playlist_id:playlist_id
        })
        let music_ids = []
        for(let i of res){
          if(i.playlist_id === playlist_id){
            if(!music_ids.includes(i.music_id)){
              music_ids.push(i.music_id)
            }
          }
        }
        this.getSongs(music_ids)
      }).catch(err => {
        console.log(err)
      })
    }


    playNextsong = () => {
      this.setState({
        song:null
      })

      const {songs, current_song_id} = this.state;
      let pending_songs = []
      for(let i of songs){
        if(i.id !== current_song_id){
          pending_songs.push(i)
        }
      }

      if(!pending_songs.length){
        return
      }

      this.setState({
        title: pending_songs[0]["title"],
        thumbnail: pending_songs[0]["thumbnail"],
        songs: pending_songs,
        playing: true,
        song: pending_songs[0]["music"],
        current_song_id:pending_songs[0]["id"]
      })

    }

    render(){
      const { playing } = this.state;
        return (
            <div className="header_player fixed-player">
            <div className="tim-container ">
              <div className="player-container">
                <div className="current-tracks">
                  <div id="main_player" className="jp-jplayer">
                    <img src={this.state.thumbnail ? "http://127.0.0.1:5000/"+this.state.thumbnail: "static/media/album/1.jpg" } alt="album thumb" />
                  </div>
                  <div id="nowPlaying">
        <h3 className="track-name">{this.state.title ? this.state.title : "No songs playing"}</h3>
                  </div>
                </div>


                {/* <div className="row">
                  <div className="col-sm-1" style={{ marginTop:'1cm' }}>
                  <button className="jp-previous pointer" tabIndex={0}><i style={{ color:'#fff', fontSize:'30px' }} className="fa fa-backward" /></button>

                    </div>
                    <div className="col-sm-10">

                    <ReactAudioPlayer
                          src={"http://127.0.0.1:5000/"+ this.state.song}
                          autoPlay
                          controls
                          style={ { margin:'0.7cm 0 0 1cm', height:'50px', width:'90%', outline:'none'}}
                          onEnded={this.playNextsong}
                        />
                    </div>
                    <div className="col-sm-1" style={{ marginTop:'1cm' }}>
                    <button className="jp-next pointer" tabIndex={0}><i style={{ color:'#fff', fontSize:'30px' }} className="fa fa-forward" /></button>

                    </div>
                </div>
               */}
                
                      <ReactAudioPlayer
                          src={"http://127.0.0.1:5000/"+ this.state.song}
                          autoPlay
                          controls
                          style={ { margin:'0.7cm 0 0 1cm', height:'50px', width:'50%', outline:'none'}}
                          onEnded={this.playNextsong}
                        />

{/*       
                <div id="header_player" className="jp-audio" role="application" aria-label="media player">
                  <div className="jp-type-playlist clearfix">
                    <div className="jp-gui jp-interface">
                      <div className="jp-controls">
                        <button className="jp-previous" tabIndex={0}><i className="fa fa-backward" /></button>
                    
                        <button className="jp-play" tabIndex={0}><i className={playing ? "fa fa-pause" : "fa fa-play" } onClick={() => this.handlePlayer(this.state.song ? "playing_id" : "audio")} />
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
                      <button id="playlist-toggle" className><i className="fa fa-list" /></button>
        
                      <div className="jp-playlist">
                        <ul>
                          <li />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              
              </div>
            </div>
          </div>
         
        )
    }
}


export default Player;


