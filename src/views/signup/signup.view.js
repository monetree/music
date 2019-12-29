import React from 'react'
import { Link } from "react-router-dom";
import MainHeader from '../../components/main-header/main-header.component';


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div id="site">
             <MainHeader />
                <div className="main-w3layouts wrapper" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/5.jpg")` }}>
                    <br/><br/><br/><br/>
                    <h1>SignUp Form</h1>
                    <div className="main-agileinfo">
                    <div className="agileits-top">
                        <input className="text" type="text" placeholder="First Name" required />
                        <input className="text email" type="text" placeholder="Username" required />
                        <input className="text" type="password" placeholder="Password" required />
                        <input className="text w3lpass" type="text" placeholder="Security Question" required />
                        <div className="row">
                            <div className="col-sm-6">
                                <button type="button" className="form-button">Done</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="form-button">Cancel</button>
                            </div>
                        </div>
                        <p>Have an Account? <Link to="/login"> Login Now!</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;