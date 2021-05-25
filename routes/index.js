require('dotenv').config();
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/', function (req, res, next) {
  res.status(200);
  res.render('index', { title: "프로젝트 시작" });
});

module.exports = router;