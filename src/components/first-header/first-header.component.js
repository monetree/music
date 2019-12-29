import React from 'react';
import { Link } from "react-router-dom";

class FirstHeader extends React.Component {
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
            <div className="top-header">
            <div className="tim-container clearfix">
            <ul className="user-login float-left">
                <li><Link to="/">Home</Link></li>
              </ul>
              {/* <ul className="site-social-link">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
              </ul> */}
              {/* /.site-social-link */}
              <ul className="user-login float-right">
                <li><Link to={path === "/album" || path === "/profile" ? "/profile" : "/register"}>{path === "/album" || path === "/profile" ? "Profile" : "Sign Up"}</Link></li>
                <li><Link to={path === "/album" || path === "/profile" ? "/profile" : "/login"}>{path === "/album" || path === "/profile" ? "Logout" : "Sign In"}</Link></li>
              </ul>
            </div>
            {/* /.tim-container */}
          </div>
        )
    }
}

export default FirstHeader;