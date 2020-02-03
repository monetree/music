import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import FormatUrl from "utils/UrlFormatter";


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            login_username:null,
            login_id: null
        }
        this.mainheader = React.createRef()
    }

    handleSuccess = () => {
        localStorage.setItem("login_id", this.state.login_id)
        localStorage.setItem("login_username", this.state.login_username)
        this.mainheader.current.handleSuccess()   
        this.props.history.push("/profile")
    }

    submitForm = () => {
        let username = this.state.username;
        let password = this.state.password;
        if(!username || !username.length){
            ToastsStore.warning("username required", 3000, "toast-box-pink")
            return
        }
        if(!password || !password.length){
            ToastsStore.warning("password required", 3000, "toast-box-pink")
            return
        }
        let url = FormatUrl(`/signin`)
        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password:password
            })
            })
        .then(response => response.json())
        .then(res => {
            if(res.length){
                this.setState({
                    login_username: res[0].username,
                    login_id: res[0].id
                }, () => this.handleSuccess())
            ToastsStore.success("Login successful", 3000, "toast-box-pink")
                } else {
            ToastsStore.error("Login failed", 3000, "toast-box-pink")
            }
        }).catch(err => {
            ToastsStore.error("Internal server erro", 3000, "toast-box-pink")
        })

    }

    cancelForm = () => {
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    }

    
    render(){
        return (
            <div id="site">
            <MainHeader ref={this.mainheader} />
            <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }}>
            <br/><br/><br/><br/>
                <h1>SignIn Form</h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <input className="text email" id="username" type="text" onChange={(e) => this.setState({username: e.target.value})} placeholder="Username" required />
                        <input className="text" id="password" type="password" onChange={(e) => this.setState({password: e.target.value})}  placeholder="Password" required />
                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.submitForm}>Ok</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.cancelForm}>Cancel</button>
                            </div>
                        </div>
                        <p>Don't have an Account? <Link to="/register"> Register Now!</Link></p>
                    </div>
                </div>
                <br/><br/>
            </div>
            <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}


export default SignIn;