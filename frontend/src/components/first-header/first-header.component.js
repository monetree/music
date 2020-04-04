import React from 'react';
import { Link } from "react-router-dom";

class FirstHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          path:null,
          logged_in: false,
          login_username: null
        }
    }

    

    componentDidMount(){
      let login_id = localStorage.getItem("login_id")
      let login_username = localStorage.getItem("login_username")
      if(login_id){
        this.setState({
          logged_in: true,
          login_username: login_username
        })
      }
    }

    handleSuccess = () => {
      let login_id = localStorage.getItem("login_id")
      let login_username = localStorage.getItem("login_username")
      if(login_id){
        this.setState({
          logged_in: true,
          login_username: login_username
        })
      }
    }

    handleLogout = () => {
      this.setState({
        logged_in:false,
        login_username: null
      })
      localStorage.removeItem("login_id")
      localStorage.removeItem("login_username")
      window.location = "/"
    }

    render(){
      const { path, logged_in } = this.state;
        return (
            <div className="top-header">
            <div className="tim-container clearfix">
            <ul className="user-login float-left">
                <li><Link to="/">Home</Link></li>
              </ul>
              {
                logged_in ? (
                  <ul className="user-login float-right">
                    <li><a style={{ color:'#fff' }}>Loggedin as {localStorage.getItem("login_username")}</a></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/album">Album</Link></li>
                    <li><Link onClick={this.handleLogout}>Logout</Link></li>
                    
                  </ul>
                ) : (
                  <ul className="user-login float-right">
                    <li><Link to="/register">Sign Up</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                  </ul>
                )
              }

            </div>
            {/* /.tim-container */}
          </div>
        )
    }
}

export default FirstHeader;