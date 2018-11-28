import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Expenses from './components/Expenses';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Expenses />
      </div>
    );
  }
}

export default App;
