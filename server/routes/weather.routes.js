const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/searchResult/:city", (req, res) => {
  const { city } = req.params;

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.OWAPI_key}`
    )
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(`🔴 ERROR FROM WEATHER ROUTES JS ON SERVER`);
      res.status(500).json(error);
    })
    .then(function () {});
});

module.exports = router;
