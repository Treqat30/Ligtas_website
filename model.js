const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const app = express();

// Load the model.
async function loadModel() {
  const model = await tf.loadLayersModel('data/model.h5');
  return model;
}

// Define an endpoint for running predictions.
app.post('/predict', async (req, res) => {
  const model = await loadModel();
  const prediction = model.predict(tf.tensor2d([req.body.input], [1, req.body.input.length]));
  res.json(prediction.dataSync());
});

app.listen( 3000 , () => {
    console.log('Server Runnning on Port :3000')
  });
