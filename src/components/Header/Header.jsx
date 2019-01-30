import React from 'react';
import Verticals from '../../json/verticals.json';

const Header = () => (
  <header>
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <ul className='navbar-nav mx-auto'>
        {Verticals.map(({ Id, Name }, index) => 
          <li className='nav-item' key={index}>
            <a className='nav-link text-white' href={`/${Name.split(' ').join('_')}/${Id}`}>{Name}</a>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default Header;