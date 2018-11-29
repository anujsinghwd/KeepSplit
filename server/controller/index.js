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

module.exports = {
    remove,
    add,
    read,
    read_all
}
