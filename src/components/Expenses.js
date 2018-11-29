import React, { Component } from 'react';

class Expenses extends Component {
  render(){
    return(
      <div>
          
            <li className="collection-item avatar">
              <i className="material-icons circle green">people</i>
              <span className="title">{this.props.name}</span>
              <p>{this.props.title}</p>
              <a href="#!" className="secondary-content"> <i className="material-icons">attach_money</i> <span style={{fontSize: '27px'}}>{this.props.amount}</span></a>
            </li>
            {/* <li className="collection-item avatar">
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
            </li> */}
      </div>
    );
  }
}

export default Expenses;
