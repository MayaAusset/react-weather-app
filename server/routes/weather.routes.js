const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/searchResult", (req, res) => {
  const { cityName } = req.query;

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${process.env.OWAPI_key}`
    )
    .then((response) => {
      console.log(`The response is ${response}`);
      res.status(200).json(response);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;
