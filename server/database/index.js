const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mmi@12345',
  database : 'split'
});

connection.connect(function(err) {
    if (err){
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

// var read = (query) => {
//   connection.query(query, function (error, results) {
//     connection.end();
//     if (error) throw error;
//     console.log(results);
//   });
// };

module.exports = {
  connection
};