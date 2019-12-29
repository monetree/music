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
            <div className="header-inner">
            <div className="tim-container clearfix">
              <div id="site-logo" className="float-left">
                <Link to="/">
                  {/* <img src="static/assets/img/logo.png" alt="logo" /> */}
                  <h4 style={{ color:'#fff', margin:'auto',marginTop:'1cm' }}>Music Hub</h4>
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
                      <li><a href="#">Upload</a></li>
                      <li><input style={{ width:'400px',padding:'2px', border:'2px solid pink', color:'#fff', fontWeight:'bold' }} type="text" placeholder="Search here" required /></li>
                    </ul>
                  </div>
                ):(
                  <div className="nav float-right">
                  <ul id="main-header-menu">
                    <li className="menu-item-has-children active">
                      <a href="index-2.html">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index-2.html">Home Player V1</a></li>
                        <li><a href="index-two.html">Home Player V2</a></li>
                        <li><a href="index-three.html">Home Three</a></li>
                        <li><a href="index-four.html">Home Magazine</a></li>
                        <li><a href="index-five.html">Home Five</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="artist.html">Aritist</a>
                      <ul className="sub-menu">
                        <li><a href="artist.html">Artist</a></li>
                        <li><a href="artist-single.html">Artist Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="album.html">Album</a>
                      <ul className="sub-menu">
                        <li><a href="album.html">Album</a></li>
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
                        <li><a href="tabs.html">Tabs</a></li>
                        <li><a href="tabs-single.html">Tabs Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog-list-right.html">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog-list-right.html">Blog Standard</a></li>
                        <li><a href="blog-grid-right.html">Blog Grid</a></li>
                        <li><a href="blog-single.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li className="menu-item-has-children">
                      <a href="shop-right.html">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop-right.html">Shop Right</a></li>
                        <li><a href="shop-left.html">Shop Left</a></li>
                        <li><a href="shop-single.html">Shop Details</a></li>
                      </ul>
                    </li>
                  </ul>
                  <a href="shop-left.html" className="head-btn">Music Store</a>
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