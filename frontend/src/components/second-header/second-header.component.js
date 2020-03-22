import React from 'react';
import { Link } from "react-router-dom";
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';

class SecondHeader extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        path:null
      }
  }

  handleSearch = (ev) => {
    
  }


  componentDidMount(){
    this.setState({
      path:window.location.pathname
    })
  }

  uploadFile = (event) => {
    let formData = new FormData();
    formData.append('file-to-upload', event.target.files[0]);
    let url = FormatUrl(`/upload`)
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
            ToastsStore.success("upload successful", 3000, "toast-box-pink")
          } else {
            ToastsStore.error("upload failed", 3000, "toast-box-pink")
          }
      }).catch(err => {
        ToastsStore.error("Internal server error", 3000, "toast-box-pink")
      })
}


    render(){
      const { path } = this.state;
        return (
            <div className={path === "/album" || path === "/profile" ? "header-inner no-blur-blue" : "header-inner"}>
            <div className="tim-container clearfix">
              <div id="site-logo" className="float-left">
                <Link to="/">
                
                  {/* <h4 style={{ color:'#fff', margin:'auto',marginTop:'1cm', fontFamily:'Callibri', fontSize:'60px'}}>Music Hub</h4> */}
                  <h4 style={{color:'#ffff', marginTop:'0.6cm', fontSize:'60px'}} data-animate="fadeInUp" data-delay="0.5s" >
                    
                    Music Hub
                    </h4>
                </Link>
                <a href="index-2.html" className="logo-stickky">
                  <img src="assets/img/logo-sticky.png" alt="logo" />
                </a>
              </div>

              
              {
                path === "/album" ?
                (
                  <div className="nav float-right">
                    <ul id="main-header-menu">
                   
                      <li> 
                        <Link to="/music-upload">
                      <label className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                          Upload music
                      </label>
                      </Link>
                    </li>

                    <li> 
                        <Link to="/artist-upload">
                      <label className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                          Upload artist
                      </label>
                      </Link>
                    </li>

                    <li> 
                        <Link to="/playlist-upload">
                      <label className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                          Create Playlist
                      </label>
                      </Link>
                    </li>

                      <li>
                        <input className="store-btn ml__15" onChange={this.handleSearch} type="text" placeholder="Search Artist, Song, Album..." required />
                      </li>
                    </ul>
                  </div>
                ):(
                  <div className="nav float-right">
                  <ul id="main-header-menu">
                    <li className="menu-item-has-children active">
                      <a href="index-2.html">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index-2.html">Music Player </a></li>
                   
                       
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="artist.html">Aritist</a>
                      <ul className="sub-menu">
                        
                        <li><a href="artist-single.html">Artist Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="album.html">Album</a>
                      <ul className="sub-menu">
                        
                        <li><a href="album-single.html">Album Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="event.html">Events</a>
                      <ul className="sub-menu">
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="tabs.html">Tabs</a>
                      <ul className="sub-menu">
                        
                        <li><a href="tabs-single.html">Tabs Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="tabs.html">About Us</a>
                      <ul className="sub-menu">
                        <li><a href="tabs.html">Tabs</a></li>
                        <li><a href="tabs-single.html">Tabs Details</a></li>
                      </ul>
                    </li>
                   
                    <li className="menu-item-has-children">
                     
                      
                    </li>
                  </ul>
                  
                </div>  
                )
              }


              {/* /.nav */}
     
            </div>
            <ToastsContainer store={ToastsStore} />
          </div>
        )
    }
}

export default SecondHeader;