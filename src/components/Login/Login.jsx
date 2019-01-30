import React,{Component} from 'react';

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleLogin = (e) => {
    const email = this.state.email;
    const password = this.state.password;
    // this.props.login({ email, password, isLoggedIn })
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
                <input type="password" onChange={(e) => this.setState({email: e.target.value})} className="form-control" ref="password" placeholder="Password" />
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