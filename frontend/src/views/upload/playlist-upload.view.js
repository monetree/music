import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';



class PlaylistUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            thumbnail: null
        }
    }

    uploadThumbnail = (e) => {
        let formData = new FormData();
        formData.append('image', e.target.files[0]);        
        let url = FormatUrl(`/thumbnail`)
        fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*'
              },
              body:formData,
          })
          .then(response => response.json())
          .then(res => {
            if(res){
                this.setState({
                    thumbnail: res.path
                })
            }
          })
    }


    uploadPlaylist = () => {
        let thumbnail = this.state.thumbnail;
        let name = this.state.name;
        let user_id = localStorage.getItem("login_id")
        let url = FormatUrl(`/playlist`)

        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                thumbnail: thumbnail,
                user_id:user_id
            })
            })
        .then(res => res.json())
        .then(res => {
           if(res.code === 200){
            ToastsStore.success("success", 3000, "toast-box-pink")
           } else {
            ToastsStore.error("failed", 3000, "toast-box-pink")
           }
        }).catch(err => {
            ToastsStore.error("failed", 3000, "toast-box-pink")
        })
    }


    render(){
        return (
            <div id="site">
             <MainHeader />
                <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }}>
                    <br/><br/><br/><br/>
                    <h1>Create Playlist</h1>
                    <div className="main-agileinfo">
                    <div className="agileits-top">
                        <input className="text" id="firstname" type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="playlist title" required />
                        <br/>
                        <label style={{ width:'88%' }} className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                            <input style={{ display:'none' }} type="file" onChange={this.uploadThumbnail} />
                            Playlist thumbnail
                        </label>
                      

                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.uploadPlaylist}>Done</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="form-button">Cancel</button>
                            </div>
                        </div>
                        <p style={{ visibility:'hidden' }}>Have an Account? <Link to="/login"> Login Now!</Link></p>
                    </div>
                    </div>
                </div>
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}


export default PlaylistUpload;