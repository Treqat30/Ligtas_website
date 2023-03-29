const mqtt = require('mqtt');

const host = 'au1.cloud.thethings.industries';
const port = 1883;
const accessKey = 'NNSXS.FOQSN7FHGM4EQGUMZDQIDAOZ22FZSIFAGGQULCA.IUPA5TVP7PO7PIUOB3JX3CTCG6XZNMWUWTSOCSVZ256PR5XP6P6A'; // access key
const username = 'ligtas-system@packetworx'; 
const password = Buffer.from(accessKey).toString('base64');

// Connect to the MQTT broker
const client = mqtt.connect(`mqtt://${host}:${port}`, {
  username,
  password
});

// Listen for the connect event
client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

// Listen for the error event
client.on('error', (err) => {
  console.error('Error connecting to MQTT broker:', err);
});

// 

// client.on('connect', () => {
//     // Subcribes the MQTT to a topic. The v3 refers to the version of The Things Stack's MQTT API that the client is using.
//   client.subscribe(`v3/${username}/#`, (err) => {
//     if (!err) {
//       console.log('Subscribed to topic: v3/<tenant-id>/<application-id>/#');
//       console.log('Connected Successfully');
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   console.log(`Received message: ${message.toString()} on topic ${topic}`);
// });