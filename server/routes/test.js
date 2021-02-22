const axios = require("axios");
require("dotenv").config();



const workingApi = () => {
  /*  axios
    .get(
      //`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.OWAPI_key}`
      "http://api.openweathermap.org/data/2.5/weather?q=Biarritz&units=metric&APPID=1babe170134ef1845b6d20ca57ff9175"
    )
    .then((response) => {
      console.log(`RESPONSE FROM TEST IS ${response}`);
      response.status(200).json(response);
    })
    .catch((err) => {
        console.log(`ERROR FROM TEST JS ON SERVER`);
        response.status(500).json(err);
    }); */

    const city = "Biarritz";
    //console.log(`NV IS ${process.env.OWAPI_key}`)
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.OWAPI_key}`
    )
    .then(function (response) {
        
      console.log(response);
      //response.json();
    })
    .catch(function (error) {
      //console.log(error);
    })
    .then(function () {
    });
};

workingApi();

//module.exports = test.js
