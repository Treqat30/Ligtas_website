const mqtt = require('mqtt');
const mysql = require('mysql');
// to create the mqtt client and connection
const client = mqtt.connect('mqtt://au1.cloud.thethings.industries:1883', {
  username: '',
  password: ''
});

// to create the connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: null, 
//     database: 'monitoringdb'
//   });
// to check the connection to the mysql database 

const topic = 'v3/ligtas-system/devices/weathersystem/up'
client.on('connect', () => {
  console.log('Connected to the MQTT Broker')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
})

client.on('message', (topic, message) => {
  // return a received message from the topic and convert the message buffer to a string.  
  console.log(`Received message from topic ${topic}: ${message.toString()}`); 
  // Parse the JSON data contained in the message and store the resulting object in a `data` variable.
  const data = JSON.parse(message.toString());
  // Inset the values from the data to the mysql database 
  const sql = `INSERT INTO YOUR sample_data (humidity, temperature) VALUES (?, ?)`;
  const values = [ data.humidity, data.temperature];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL database: ', err);
    } else {
      console.log('Data inserted successfully into MySQL database');
    }
  });
})




// });



