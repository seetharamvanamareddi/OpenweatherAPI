const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
require('dotenv').config()

// console.log(process.env)

const app = express();

app.get("/", function (req, res) {

  res.sendFile(__dirname + "/index.html")
  });

  app.post("/", function(req, res){
    //console.log("post request recieved.")
    //console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = process.env.API_KEY;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "units=" + unit;
    https.get(url, function (response) {
      // console.log(response);

      response.on("data", function (data) {
        //console.log(data)
        const weatherData = JSON.parse(data);
        // console.log(weatherData)
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        //console.log(weatherDescription)
        const icon = weatherData.weather[0].icon;
        res.write("<h3>The weather is currently " + weatherDescription + "</h3>");
        res.write("<h1>The temperature in " + query + " is " + temp + "degrees Fahrenheit.</h1>");
        res.send();
      });
    });
  })


app.listen(3000, function () {
  console.log("server is running on port 3000");
});
