import React, { Component } from 'react';
class AddExpenseForm extends Component {
  onSubmit(event)
  {
    event.preventDefault();
      let title = this.refs.title.value;
      let amount = this.refs.amount.value;
      let name = this.refs.name.value;
      this.props.add(title, amount, name);
      this.refs.title.value = '';
      this.refs.amount.value = '';
      this.refs.name.value = '';
  }

  render(){
    return(
      <div>
          <div className="row container">
            <div className="col s12 l6 xl6 offset-l3 offset-xl3">
              <div className="col s12">
                <form onSubmit={this.onSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" ref="title" type="text" className="validate" />
                    <label htmlFor="title">Expense Title</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="body" ref="name" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea">Your Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="body" ref="amount" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea">Amonut</label>
                  </div>
                </div>
                <button type="submit" className="waves-effect waves-light btn amber darken-4">Add Expense</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AddExpenseForm;
