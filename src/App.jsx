import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {
  
  state = {
    isLoggedIn: window.localStorage.getItem('token') ? true : false
  }

  render() {
    return (
      <Routes isLoggedIn={this.state.isLoggedIn} />
    );
  }
}

export default App;
