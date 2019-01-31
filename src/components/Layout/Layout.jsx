import React,{Component} from 'react';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer';

class Layout extends Component{ 
  
  handleLogout = (e) => {
    window.localStorage.removeItem('token');
    window.location.assign('/');
  }
  
  render() {
    return(
      <div className='App'>
        <Header onLogout={this.handleLogout}/>
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default Layout;