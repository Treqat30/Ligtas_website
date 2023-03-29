
const asyncHandler = require("express-async-handler");
const connection = require('../database');

const getWeather = asyncHandler(async (req,res)=>{
    const query = "SELECT * FROM sample_data ORDER BY id DESC LIMIT 1";
    const rows = await connection.query(query);
    connection.query(query, function (err, rows, fields){
      if (err) {
        console.log("An error occured with the query"); 
        res.status(500).send('Error executing query'); // Return error status
        return;
      }
  
      const mostRecentMeasure = rows[0];

      const temp = mostRecentMeasure.temperature; 
      const humid = mostRecentMeasure.humidity;  
      const airPressure = mostRecentMeasure.pressure;  
      const windSpeed = mostRecentMeasure.windSpeed;  
      const windDirection = mostRecentMeasure.windDirection;  
      const rainIntensity = mostRecentMeasure.rainIntensity;  
      const readingTime = mostRecentMeasure.readingTime;

  
      res.render('weather', { temp, humid, airPressure, windSpeed, windDirection, rainIntensity, readingTime }); // Render HTML template with variables


    });
});



module.exports = {getWeather};