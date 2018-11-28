import React, { Component } from 'react';

class Expenses extends Component {
  render(){
    return(
      <div>
          <ul className="collection">
            <li className="collection-item avatar">
              <i className="material-icons circle">people</i>
              <span className="title">Title</span>
              <p>First Line </p>
              <a href="#!" className="secondary-content"><i className="material-icons">attach_money</i></a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle green">people</i>
              <span className="title">Title</span>
              <p>First Line </p>
              <a href="#!" className="secondary-content"><i className="material-icons">attach_money</i></a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle red">people</i>
              <span className="title">Title</span>
              <p>First Line </p>
              <a href="#!" className="secondary-content"><i className="material-icons">attach_money</i></a>
            </li>
          </ul>
      </div>
    );
  }
}

export default Expenses;
