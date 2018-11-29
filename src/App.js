import React, { Component } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Header from './components/Header';
import Expenses from './components/Expenses';

import AddExpenseForm from './components/AddExpenseForm';
const API_URL = "http://localhost:5000/apis/keepsplit";

//delete_note={this.deleteNotes.bind(this)}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      expenses_data: []
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  settle()
  {
    let finalURL = `${API_URL}/settle`;
    fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      alert(JSON.stringify(data));
      if(data['status'] === 200)
      {
        console.log(data);
      }
      else
      {
        //NotificationManager.warning(data['message'],'WARNING',  3000);
      }
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  getNotes()
  {
    let finalURL = `${API_URL}/getAllExpenses`;
    fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      if(data['status'] === 200)
      {
        this.setState({expenses_data: data['data']});
      }
      else
      {
        NotificationManager.warning(data['message'],'WARNING',  3000);
      }
    })
   .catch((error) => console.log('There was a problem in fetching data '+error));
  }

  addExpense(title, amount, name){
    if(title && name && amount)
    {
      let finalURL = `${API_URL}/addExpense`;
      fetch(finalURL,
      {
        method: "POST",
        headers:
        {
           'Accept': 'application/json',
           'Content-Type': 'application/json',

        },
        body: JSON.stringify({title: title, name: name, amount: amount})
      })
      .then((res) => res.json())
      .then((data) => {
        if(data['status'] === 201)
        {
            /*
            console.log(data['data']['id']);
              let d = new Date();
              var timestamp = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
            */
            this.setState({
                expenses_data: this.state.expenses_data.concat({"id": data['data']['id'],"title": data['data']['title'], "name": data['data']['name'], "timestamp": data['data']['timestamp'], "amount": data['data']['amount']})
              });
            NotificationManager.success('Expense added successfully','Created');
        }
        else
        {
          NotificationManager.warning(data['message'],'WARNING',  3000);
        }
      })
     .catch((error) => console.log('There was a problem in fetching data '+error));
    }
    else
    {
      NotificationManager.warning('Enter all the Fields','WARNING',  3000);
    }
  }

  render() {
    let expenses;
    if(this.state.expenses_data){
      expenses = this.state.expenses_data.map((data, i) => {
          return <Expenses key={i} amount={data['amount']} time_stamp={data['timestamp']} title={data['title']} name={data['name']} Id={data['id']} />;
      });

    }
    return (
      <div>
        <Header settleAmount={this.settle.bind(this)} />
        <AddExpenseForm add={this.addExpense.bind(this)}/>
        <ul className="collection">
            {expenses}
        </ul>
        
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
