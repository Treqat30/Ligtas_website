// const Client = require('ssh2').Client;
// const mysql = require('mysql2');

// const sshConfig = {
//   host: 'server327.web-hosting.com',
//   port: 21098,
//   username: 'ligtcatb',
//   password: '3$6^ac96z58w9fgW'
// };

// const dbConfig = { 
//     host: '127.0.0.1',
//     user: 'ligtcatb_LIGTAS',
//     password: 'O4q}UxEW)u[2',
//     database: 'ligtcatb_NodeReadings'
// };

// const conn = new Client();
// const dbConn = mysql.createConnection(dbConfig);

// conn.on('ready', function() {
//   console.log('SSH connection established.');
//   dbConn.connect(function(err) {
//     if (err) {
//       console.error('Error connecting to database: ' + err.stack);
//       return;
//     }
//     console.log('Connected to database as ID ' + dbConn.threadId);
//     dbConn.query('SELECT * FROM Weather_Parameters', function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results);
//       dbConn.end();
//       conn.end();
//     });
//   });
// }).connect(sshConfig);




const mysql = require('mysql');


  // to create connection
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, 
    database: 'monitoringdb'
  });

// // to create connection
// const connection = mysql.createConnection({
//     host: 'server327.web-hosting.com',
//     user: 'ligtcatb_LIGTAS',
//     password:'gEd$e68kzV#Q', 
//     database: 'ligtcatb_NodeReadings',
//     connectTimeout: 20000 // 20 seconds
//   });
  

// connect to database
connection.connect(function(err) {
  if (err) {
      console.log(err.code);
      console.log(err.fatal);
  }
})
  module.exports = connection;

// //To get the latest data from the MYSQL database
// $query = "SELECT * FROM sample_data ORDER BY id DESC LIMIT 1";
// connection.query($query, function (err, rows, fields){
//   if(err){
//       console.log("An error occured with the query"); // return when there is an error in the query
//       return;
//   }
//   // Selecting the first object (at index 0) in the array and assigning it to the variable "mostRecentMeasure".
//   // Wherein the "mostRecentMeasure" represents the most recent measure or data point in the "rows" array.
//   const mostRecentMeasure = rows[0];
  
//  // Selecting the Temperature and Humidity values in mostRecentMeasure and assigning it respectively to the variale "temp" and "humid" 
//   const temp = mostRecentMeasure.temperature; 
//   const humid = mostRecentMeasure.humidity;  
//   const date = mostRecentMeasure.dateTime;
  
//   // Return the message query successfully executed and the values temp and humid.
//   console.log("Query successfully executed", date, temp, humid);
// })











