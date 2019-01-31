import React,{Component} from 'react';
import axios from 'axios';

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleLogin = async (e) => {
    const obj = { 
      email: this.state.email,
      password: this.state.password
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/login?email=${obj.email}&password=${obj.password}`);
      if(data.message === "Login successful!" && data.token)
        window.localStorage.setItem('token', data.token);
        window.location.assign('/Dashboard');
      }
      catch (err) {
        console.log(err);
      }
  }

  render(){
    return(
      <div className="container">
        <div className="fullscreen">
          <div className="row justify-content-center w-100">
            <div className="col-xl-5 col-lg-6 col-md-7 login-form">
              <h1>Login to your account</h1>
              <hr/>
              <div className="form-group">
                <input type="email" onChange={(e) => this.setState({email: e.target.value})} className="form-control" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" onChange={(e) => this.setState({password: e.target.value})} className="form-control" ref="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-block btn-primary" onClick={this.handleLogin}>Log In</button>              
                <small className="mt-1">Don't have an account <a href='/Signup'>SignUp</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}