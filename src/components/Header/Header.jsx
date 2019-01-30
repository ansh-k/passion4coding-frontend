import React,{Component} from 'react';
import Verticals from '../../json/verticals.json';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            {Verticals.map(({ Id, Name }, index) => 
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`/${Name.split(' ').join('_')}/${Id}`}>{Name}</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
} 