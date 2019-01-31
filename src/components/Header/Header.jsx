import React from 'react';
import Verticals from '../../json/verticals.json';

const Header = (props) => (
  <header>
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <ul className="nav navbar-nav navbar-left">
        <li><a className='text-white' href='/Dashboard'>Brand</a></li>
      </ul>
      <ul className='navbar-nav mx-auto'>
        {Verticals.map(({ Id, Name }, index) => 
          <li className='nav-item' key={index}>
            <a className='nav-link text-white' href={`/${Name.split(' ').join('_')}/${Id}`}>{Name}</a>
          </li>
        )}
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><button className='btn btn-danger' onClick={props.onLogout}>Logout</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;