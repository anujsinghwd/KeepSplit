import React, { Component } from 'react';
//import SettleModal from './SettleModal';

class Header extends Component {

  handleClick(){
      this.props.settleAmount();
  }

  render(){
    return(
      <div>
      <nav className="grey darken-3 header-style">
          <div className="nav-wrapper">
            <a>Divide & Solve</a>
            <ul className="right hide-on-med-and-down">
            <li><a alt="" className="waves-effect waves-light btn" onClick={this.handleClick.bind(this)}>Settle</a></li>
          </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
