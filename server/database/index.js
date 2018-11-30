let mongoose = require('mongoose');
const server = "<user>:<password>@ds119164.mlab.com:19164";
const database = 'keepsplit_dev';  
let UserModel = require('./schema/users');

class Database {
  constructor() 
  {
    this._connect();
  }

  _connect() {
      mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
          console.log('Database connection successful');
        })
        .catch(err => {
          console.error('Database connection error'+err);
        })
  }
}

module.exports = new Database();