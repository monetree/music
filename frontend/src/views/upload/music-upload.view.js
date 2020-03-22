import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';



class MusicUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            thumbnail: null,
            audio: null,
            artists: [],
            artist_id: null
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


    uploadAudio = (e) => {
        let formData = new FormData();
        formData.append('audio', e.target.files[0]);        
        let url = FormatUrl(`/audio`)
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
                      audio: res.path
                  })
              }
          })
    }

    uploadMusic = () => {
        let audio = this.state.audio;
        let thumbnail = this.state.thumbnail;
        let title = this.state.title;
        let user_id = localStorage.getItem("login_id")
        let artist_id = this.state.artist_id;
        let url = FormatUrl(`/music`)

        if(!artist_id){
            ToastsStore.warning("choose artist", 3000, "toast-box-pink")
            return
        }

        if(!thumbnail){
            ToastsStore.warning("choose thumbnail", 3000, "toast-box-pink")
            return
        }

        if(!audio){
            ToastsStore.warning("choose audio", 3000, "toast-box-pink")
            return
        }


        if(!title){
            ToastsStore.warning("choose title", 3000, "toast-box-pink")
            return
        }

        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                music: audio,
                thumbnail: thumbnail,
                title:title,
                user_id: user_id,
                artist_id:artist_id
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


    componentDidMount(){
        let url = FormatUrl(`/artist`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                artists: res
            })
        }).catch(err => {
            this.setState({
                artists: []
            })
        })
    }


    render(){
        return (
            <div id="site">
             <MainHeader />
                <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }}>
                    <br/><br/><br/><br/>
                    <h1>Upload Music</h1>
                    <div className="main-agileinfo">
                    <div className="agileits-top">
                        <input className="text" id="firstname" type="text" onChange={(e) => this.setState({title: e.target.value})} placeholder="Music title" required />
                        <br/>
                        <label className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                            <input style={{ display:'none' }} type="file" onChange={this.uploadThumbnail} />
                            Music thumbnail
                        </label>
                        <label className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                            <input style={{ display:'none' }} type="file" onChange={this.uploadAudio} />
                            Audio file
                        </label>

                        <select onChange={(e) => this.setState({artist_id: e.target.value})} style={{ width:'93%', padding:'10px', background:'none', color:'gray', marginTop:'10px' }}>
                               
                        <option >Choose artists</option>

                                {
                                    this.state.artists.map((artist, index) => (
                                    <option key={index} value={artist.id}>{artist.name}</option>
                                    ))
                                }   
                        </select>

                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.uploadMusic}>Done</button>
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


export default MusicUpload;