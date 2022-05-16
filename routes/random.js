var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const minVal = req.body.min;
  const maxVal = req.body.max;
  const resultNum = Math.floor(Math.random() * maxVal) + minVal;
  const resultJson = {
    "number": resultNum
  }
  res.json(resultJson);
});

module.exports = router;
