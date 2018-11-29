const expenses = require('../model/index');

var add = (req) => {
  let response;
  let status;
  if(req.body.title && req.body.amount && req.body.name)
  {
      var expense = expenses.add(req.body.title, req.body.name, req.body.amount);
      if(expense)
      {
        status = 201;
        response = {"status": 201, "message": "Expense added successfully", "data": expense};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Expense already exists"};
      }
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

var read = (req) => {
  let response;
  let status;
  if(req.body.title)
  {

      var expense = expenses.get(req.body.title);
      if(expense)
      {
        status = 200;
        response = {"status": 200 ,"data": expense};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Expense not found"};
      }
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

var read_all = (req) => {
  let response;
  let status;
  var expensesList = expenses.getAll();
  if(expensesList)
  {
    status = 200;
    response = {"status": 200 ,"data": expensesList};
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "Expense not found"};
  }
  return [status, response];
}

var remove = (req) => {
  let response;
  let status;
  if(req.body.title)
  {
      var expense = expenses.remove(req.body.title);
      if(expense)
      {
        status = 200;
        response = {"status": 200 ,"message": "Expense removed successfully"};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Expense not found"};
      }
  }
  else
  {
      status = 400;
      response = {"status": 400, "message": "pass valid parameters"};
  }
  return [status, response];
};

Array.prototype.inArray = function (value)
{
 var i;
 for (i=0; i < this.length; i++)
 {
    if (this[i] == value)
    {
    return true;
    }
 }
 return false;
};

var settle = () => {
      var data = expenses.getAll();
      var unique_names_arr=[];
      var valuesPaid = [];
      var names = [];
      var amounts = [];
      var payments = {},i;
    
      data.forEach(function (i) {
        if(!unique_names_arr.inArray(i.name)){
            unique_names_arr.push(i.name);
          }
      });

      for(i=0; i < unique_names_arr.length; i++){
        let total = 0;
        data.forEach(function (j) {
          if(j.name === unique_names_arr[i])
              {
            total = total + parseInt(j.amount);
          }
        });
        valuesPaid.push({"name": unique_names_arr[i], "amonut": total});
      }

      valuesPaid.forEach(function (i) {
          names.push(i.name);
          amounts.push(i.amonut);
      });

      for (i = 0; i < names.length; i++) {
          payments[names[i]] = amounts[i];
      }
      
      return splitPayments(payments);
}

var splitPayments = (payments) => {
  var response_sum = [];
  const people = Object.keys(payments);
  const valuesPaid = Object.values(payments);

  const sum = valuesPaid.reduce((acc, curr) => curr + acc);
  const mean = sum / people.length;

  const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
  const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);

  let i = 0;
  let j = sortedPeople.length - 1;
  let debt;

  while (i < j) {
    debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
    sortedValuesPaid[i] += debt;
    sortedValuesPaid[j] -= debt;

    response_sum.push(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt}`);

    if (sortedValuesPaid[i] === 0) {
      i++;
    }

    if (sortedValuesPaid[j] === 0) {
      j--;
    }
  }
  return response_sum;
}

module.exports = {
    remove,
    add,
    read,
    read_all,
    settle
}
