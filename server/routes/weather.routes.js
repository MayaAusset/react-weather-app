const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();


router.get("/searchResult/:city", (req, res) => {
  const { city } = req.params;
  //console.log(` 🔵  params is ${city}`)
  
    axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.OWAPI_key}`
      //`http://api.openweathermap.org/data/2.5/weather?q=Biarritz&units=metric&APPID=${process.env.OWAPI_key}`
    )
    .then(function (response) { 
      console.log(` 🟢 RESPONSE FROM WEATHER ROUTES IS ${response.data.name}`);
      
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      //console.log(`REQUET PARAMETERS ARE ${req.query}`)
      console.log(`🔴 ERROR FROM WEATHER ROUTES JS ON SERVER`);
      res.status(500).json(error);
    })
    .then(function () {
    });
});

module.exports = router;
