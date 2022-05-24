var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const minVal = parseInt(obj.min);
  const maxVal = parseInt(obj.max);
  const resultNum = Math.floor(Math.random() * maxVal) + minVal;
  console.log(resultNum);
  const resultJson = {
    "number": resultNum
  }
  res.json(resultJson);
});

module.exports = router;
