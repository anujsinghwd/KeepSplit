const expense = require('../model/index');

var add = (req) => {
  let response;
  let status;
  if(req.body.title && req.body.amount && req.body.name)
  {
      var note = notes.add(req.body.title, req.body.amount, req.body.name);
      if(note)
      {
        status = 201;
        response = {"status": 201, "message": "notes created successfully"};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note already exists"};
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

      var note = notes.get(req.body.title);
      if(note)
      {
        status = 200;
        response = {"status": 200 ,"data": note};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note not found"};
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
  var notesList = notes.getAll();
  if(notesList)
  {
    status = 200;
    response = {"status": 200 ,"data": notesList};
  }
  else
  {
    status = 400;
    response = {"status": 400, "message": "Notes not found"};
  }
  return [status, response];
}

var remove = (req) => {
  let response;
  let status;
  if(req.body.title)
  {
      var note = notes.remove(req.body.title);
      if(note)
      {
        status = 200;
        response = {"status": 200 ,"message": "note removed successfully"};
      }
      else
      {
        status = 400;
        response = {"status": 400, "message": "Note not found"};
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
