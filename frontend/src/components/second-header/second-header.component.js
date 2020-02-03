import React from 'react';
import { Link } from "react-router-dom";

class SecondHeader extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        path:null
      }
  }


  componentDidMount(){
    this.setState({
      path:window.location.pathname
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
                   
                      <li> <a href="#" className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                      
                      Upload Content
                    </a></li>
                      <li><input style={{ width:'400px',padding:'2px 5px 2px 5px', border:'2px solid #D68910', color:'#fff', fontWeight:'bold' }} type="text" placeholder="Search Artist, Song, Album..." required /></li>
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
            {/* /.tim-container */}
          </div>
        )
    }
}

export default SecondHeader;