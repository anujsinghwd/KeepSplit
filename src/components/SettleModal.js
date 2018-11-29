import React, { Component } from 'react';

class SettleModal extends Component {
  render(){
    return(
      <div>
          <div id="modal1" className="modal">
            <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
      </div>
    );
  }
}

export default SettleModal;
