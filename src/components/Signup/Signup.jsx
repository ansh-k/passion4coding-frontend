import React,{Component} from 'react';

export default class Signup extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSignup = (e) => {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    // this.props.signup({ email, password, isLoggedIn })
  }

  render(){
    return(
      <div className="container">
        <div className="fullscreen">
          <div className="row justify-content-center w-100">
            <div className="col-xl-5 col-lg-6 col-md-7 signup-form">
              <h1 className="heading">Create Account</h1>
              <hr/>
              <div className="form-group">
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" onChange={(e) => this.setState({email: e.target.value})} className="form-control" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" onChange={(e) => this.setState({password: e.target.value})} className="form-control" placeholder="Password" />
                <div className="text-left">
                  <small className="text-gray">Your password should be at least 8 characters</small>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-block btn-primary" onClick={this.handleSignup}>Create Account</button>
                <small className="mt-1">Already have an account <a href='/'>Log In</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}