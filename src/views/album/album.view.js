import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import Player from '../../components/player/player.component';
import Albums from '../../components/albums/albums.component';


class Album extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
          <div id="site">
            <MainHeader />
            <br/><br/>
            <Albums />
            <Player />
          </div> 
        )
    }
}


export default Album;