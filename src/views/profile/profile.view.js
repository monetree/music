import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import ListedSongs from '../../components/albums/listed-songs/listed-songs.component';
import Songs from '../../components/albums/songs/songs.component'


class Profile extends React.Component {
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
                <div className="container" style={{ marginTop:'3cm' }}>
                <div className="row">
                    <div className="col-sm-4">
                        <ListedSongs title="Your Liked Songs" />
                    </div>
                    <div className="col-sm-4">
                        <h5 style={{ color:'pink' }}>Update Content</h5>
                        <div>
                        <div class="form-group">
                            <label style={{ color:'pink' }}>First Name:</label>
                            <input type="text" class="form-control" style={{ background:'lightgrey', color:'#000', fontWeight:'bold' }} />
                        </div>
                        <div class="form-group">
                            <label style={{ color:'pink' }}>User Name:</label>
                            <input type="text" class="form-control" style={{ background:'lightgrey',color:'#000', fontWeight:'bold' }}/>
                        </div>
                        <div class="form-group">
                            <label style={{ color:'pink' }}>Password:</label>
                            <input type="text" class="form-control" style={{ background:'lightgrey', color:'#000', fontWeight:'bold' }}/>
                        </div>
                        <button type="submit" class="btn btn-default" style={{ background:'#e83e8c',color:'#fff' }}>Submit</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <br/><br/><br/><br/><br/>
                    <h5 style={{ color:'pink' }}>Upload Album</h5>
                    <h5 style={{ color:'pink' }}>Help</h5>
                    <h5 style={{ color:'pink' }}>Contact Customer Support</h5>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-sm-8">
                        <Songs title="Liked Albums"/>
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}

export default Profile;