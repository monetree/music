import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';



class ArtistUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            photo: null
        }
    }

    uploadPhoto = (e) => {
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
                    photo: res.path
                })
            }
          })
    }


    uploadArtist = () => {
        let name = localStorage.getItem("login_username")
        let photo = this.state.photo;
        let user_id = localStorage.getItem("login_id");
        let url = FormatUrl(`/artist`)

        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                photo: photo,
                user_id:user_id
            })
            })
        .then(res => res.json())
        .then(res => {
           if(res.code === 200){
            ToastsStore.success("success", 3000, "toast-box-pink")
            window.location = "/album"
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
                    <br/><br/><br/><br/><br/>
                    <h1>Create Profile</h1>
                    <div className="main-agileinfo">
                    <div className="agileits-top">

                 
                        <label className="store-btn ml__15" style={{ width:'88%' }} data-animate="fadeInRight" data-delay="0.9s">
                            <input style={{ display:'none' }} type="file" onChange={this.uploadPhoto} accept="image/*" />
                            Profile photo
                        </label>
   

                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.uploadArtist}>Done</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="form-button">Cancel</button>
                            </div>
                        </div>
                        <p style={{ visibility:'hidden' }}>Have an Account? <Link to="/login"> Login Now!</Link></p>
                        <p style={{ visibility:'hidden' }}>Have an Account? <Link to="/login"> Login Now!</Link></p>
                        <p style={{ visibility:'hidden' }}>Have an Account? <Link to="/login"> Login Now!</Link></p>
                    </div>
                    </div>
                </div>
                
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}


export default ArtistUpload;