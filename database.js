
const mysql = require('mysql');


  // to create connection
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, 
    database: 'monitoringdb'
  });


// connect to database
connection.connect(function(err) {
  if (err) {
      console.log(err.code);
      console.log(err.fatal);
  }
})
  module.exports = connection;











