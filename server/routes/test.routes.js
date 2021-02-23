const express = require('express');
const router  = express.Router();

router.get('/testing', (req, res, next) => {
  res.send('👌 FROM TEST ROUTES 200 OK');
  //res.status(200).json(response);
});

module.exports = router;