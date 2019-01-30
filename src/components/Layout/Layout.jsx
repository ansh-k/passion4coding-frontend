import React from 'react';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer';
import '../../App.css';

const Layout = (props) => (
  <div className='App'>
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Layout;