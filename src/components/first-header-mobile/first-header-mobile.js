import React from 'react';
import { Link } from "react-router-dom";

class FirstHeaderMobile    extends React.Component {
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
            <header id="mobile-nav-wrap">
          <div className="mob-header-inner d-flex justify-content-between">
            <div id="mobile-logo" className="d-flex justify-content-start">
              <Link to="/">
                {/* <img src="static/assets/img/logo.png" alt="Site Logo" /> */}
                <h5 style={{ color:'#fff', margin:'auto' }}>Music Hub</h5>
              </Link>
            </div>
            <ul className="user-link nav justify-content-end">
              <li><Link to={path === "/album" || path === "/profile" ? "/profile" : "/login"}><i className="fa fa-user" />{path === "/album" || path === "/profile" ? "Logout" : "Login"}</Link></li>
              <li><Link to={path === "/album" || path === "/profile" ? "/profile" : "/register"}><i className="fa fa-sign-in" />{path === "/album" || path === "/profile" ? "Profile" : "Sign Up"}</Link></li>
            </ul>
            <div id="nav-toggle" className="nav-toggle hidden-md">
              <div className="toggle-inner">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
        
          
        )
    }
}


export default FirstHeaderMobile;