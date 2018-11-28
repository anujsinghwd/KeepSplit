import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Expenses from './components/Expenses';
import AddExpenseForm from './components/AddExpenseForm';

class App extends Component {

  addExpense(title, amount, name){
    if(title && name && amount)
    {
      console.log(title, name, amount);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AddExpenseForm add={this.addExpense.bind(this)}/>
        <Expenses />
      </div>
    );
  }
}

export default App;
