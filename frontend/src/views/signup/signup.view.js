import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';



class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            username:'',
            password:''
        }
    }



    submitForm = () => {
        let firstname = this.state.firstname;
        let username = this.state.username;
        let password = this.state.password;
        if(!firstname || !firstname.length){
            ToastsStore.warning("firstname required", 3000, "toast-box-pink")
            return
        }
        if(!username || !username.length){
            ToastsStore.warning("username required", 3000, "toast-box-pink")
            return
        }
        if(!password || !password.length){
            ToastsStore.warning("password required", 3000, "toast-box-pink")
            return
        }
        let url = FormatUrl(`/register`)
        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname,
                username: username,
                password:password
            })
            })
        .then(response => response.json())
        .then(res => {
            if(res.code){
            ToastsStore.success("Registration successful", 3000, "toast-box-pink")
            this.props.history.push("/login")
                } else {
            ToastsStore.error("Registration failed", 3000, "toast-box-pink")
            }
        }).catch(err => {
            ToastsStore.error("Internal server erro", 3000, "toast-box-pink")
        })
    }

    cancelForm = () => {
        document.getElementById("firstname").value = ""
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    }
    

    render(){
        return (
            <div id="site">
             <MainHeader />
                <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }}>
                    <br/><br/><br/><br/>
                    <h1>SignUp Form</h1>
                    <div className="main-agileinfo">
                    <div className="agileits-top">
                        <input className="text" id="firstname" type="text" onChange={(e) => this.setState({firstname: e.target.value})} placeholder="First Name" required />
                        <input className="text email" id="username" type="text" onChange={(e) => this.setState({username: e.target.value})} placeholder="Username" required />
                        <input className="text" id="password" type="password" onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" required />
                        {/* <input className="text w3lpass" type="text" placeholder="Security Question" required /> */}
                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.submitForm}>Done</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="form-button" onClick={this.cancelForm}>Cancel</button>
                            </div>
                        </div>
                        <p>Have an Account? <Link to="/login"> Login Now!</Link></p>
                    </div>
                    </div>
                </div>
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}


export default SignUp;