import React,{Component} from 'react';
import api from '../../utility/query';
// import Verticals from '../../json/verticals.json';

class Header extends Component {

  state = {
    verticals: []
  }

  async componentDidMount() {
    const { data: { verticals } } = await api.get('/verticals');
    this.setState({
      verticals
    });
  }

  render() {
    return(
      <header>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <ul className="nav navbar-nav navbar-left">
            <li><a className='text-white' href='/Dashboard'>Brand</a></li>
          </ul>
          <ul className='navbar-nav mx-auto'>
            {this.state.verticals.map(({ id, name }, index) => 
              <li className='nav-item' key={index}>
                <a className='nav-link text-white' href={`/${name.split(' ').join('_')}/${id}`}>{name}</a>
              </li>
            )}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><button className='btn btn-danger' onClick={this.props.onLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;