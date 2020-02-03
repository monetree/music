import React from 'react';


class SecondHeaderMobile extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="mobile-menu-inner">
            <div className="mobile-nav-top-wrap">
              <div className="mob-header-inner clearfix">
                <div className="d-flex justify-content-start mobile-logo">
                  <a href="index-2.html">
                    <img src="assets/img/logo-dark.png" alt="Site Logo" />
                  </a>
                </div>
                <div className="close-menu">
                  <span className="bar" />
                  <span className="bar" />
                </div>
              </div>
              {/* /.mob-header-inner */}
              <div className="close-menu">
                <span className="bar" />
                <span className="bar" />
              </div>
            </div>
            {/* /.mobile-nav-top-wrap */}
            <nav id="accordian">
              <ul className="accordion-menu">
                <li>
                  <a href="#0" className="dropdownlink">Home</a>
                  <ul className="submenuItems">
                    <li><a href="index-2.html">Home One</a></li>
                    <li><a href="index-two.html">Home Two</a></li>
                    <li><a href="index-three.html">Home Three</a></li>
                    <li><a href="index-four.html">Home Four</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0" className="dropdownlink">Artist</a>
                  <ul className="submenuItems">
                    <li><a href="artist.html">Artist</a></li>
                    <li><a href="artist-single.html">Artist Details</a></li>
                  </ul>
                </li>
                <li>
                  <a href="album.html">Album</a>
                </li>
                <li>
                  <a href="#0" className="dropdownlink">Events</a>
                  <ul className="submenuItems">
                    <li><a href="event.html">Events</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="#0" className="dropdownlink">Blog</a>
                  <ul className="submenuItems">
                    <li><a href="blog-list-right.html">Blog Standard</a></li>
                    <li><a href="blog-grid-right.html">Blog Grid</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="#0" className="dropdownlink">Shop</a>
                  <ul className="submenuItems">
                    <li><a href="shop-right.html">Shop Right</a></li>
                    <li><a href="shop-left.html">Shop Left</a></li>
                    <li><a href="shop-single.html">Shop Details</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          
        )
    }
}


export default SecondHeaderMobile;