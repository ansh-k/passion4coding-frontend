import React,{Component} from 'react';
import axios from 'axios';

export default class Signup extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    message: ''
  }

  handleSignup = async (e) => {
    const obj = { 
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    try {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/signup?email=${obj.email}&name=${obj.name}&password=${obj.password}`);
    
    this.setState({ message: data.message });
    
    if(data.message === "signup successful!" && data.token)
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
            <div className="col-xl-5 col-lg-6 col-md-7 signup-form">
              <h1 className="heading">Create Account</h1>
              <hr/>
              {this.state.message && <div class="alert alert-success">
                <strong>Success!</strong> Indicates a successful or positive action.
              </div>}
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