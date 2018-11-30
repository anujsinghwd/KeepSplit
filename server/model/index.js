const fs = require('fs');
const uuidv4 = require('uuid/v4');
let UserModel = require('../database/schema/users');

require('../database/index');

var fetch = () => {
    try{
        var expensesString = fs.readFileSync('expenses-data.json');
        return JSON.parse(expensesString);
    } catch (e) {
        return [];
    }
};

var save = (expenses) => {
    fs.writeFileSync('expenses-data.json', JSON.stringify(expenses));
};

var add = (title, name, amount) => {
    let id = uuidv4();
    var expenses = fetch();
    var d = new Date();
    var timestamp = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
    var expense = {
        id,
        title,
        name,
        amount,
        timestamp
    };

    /* 
        var duplicateExpenses = expenses.filter((expense) => expense.title === title);
        var duplicateNames = expenses.filter((expense) => expense.name === name);

        if(duplicateExpenses.length === 0 || duplicateNames.length === 0) {
            
        }
    */
    expenses.push(expense);
    save(expenses);
    return expense;
};

var getAll = () => {
    return fetch();
}

var createUser = (name, password) => {
    console.log('test-3');
    let user = new UserModel({
        name: name,
        password: password
    });

    user.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })     
}

var get = (title) => {
    var expenses = fetch();
    var filteredExpenses = expenses.filter((expense) => expense.title === title );
    return filteredExpenses[0];
}

var remove = (title) => {
    var expenses = fetch();
    var filteredExpenses = expenses.filter((expense) => expense.title !== title);
    save(filteredExpenses);
    return expenses.length !== filteredExpenses.length;
}

module.exports = {
    add,
    getAll,
    get,
    remove,
    createUser
}
