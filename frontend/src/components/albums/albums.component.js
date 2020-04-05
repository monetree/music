import React from 'react';
import Artist from './artist/artist.component';
import Genre from './genre/genre.component';
import Songs from './songs/songs.component';
import RecentlyPlayed from './recently-played/recently-played.component';
import ListedSongs from './listed-songs/listed-songs.component';


class Albums extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="row">
            <div className="col-sm-12">
              <section id="album">
                <Artist />
                <Genre playPLaylist={this.props.playPLaylist}/>
                <Songs playSong={this.props.playSong}/>
              </section>  
                
            </div>
            {/* <div className="col-sm-4">
            <section id="album">
                <RecentlyPlayed />
                <ListedSongs />
              </section>
              
            </div> */}
          </div>
        )
    }
}


export default Albums;