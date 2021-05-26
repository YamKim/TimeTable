require('dotenv').config();
const express = require('express');
const router = express.Router();

const { Journey } = require('../models');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

//app.use(bodyParser.json());


router.get('/', function (req, res, next) {
  res.status(200);
  res.render('index', { title: "프로젝트 시작" });
});

router.get('/journey', async function (req, res, next) {
  /*
  await Journey.create({
    memo: "abcabc",
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  })
  */
 /*
  let journeyData = new Array;
  await Journey.findAll().then((data) => {
    console.log("journey database called");
    let i = 0;
    while (data[i]) {
      const content = data[i].dataValues.memo;
      journeyData.push(content);
      ++i;
    }
    res.render('journey', { title: "journey", data: journeyData });
  }).catch((err) => {
    console.log("Sequelize selection err");
    next(err);
  });
*/
  const journeyData = [0, 1, 2, 3];
  res.render('journey', { title: "journey", data: journeyData });
});

router.post('/journey', async function (req, res, next) {
  console.log(req.body);
})

module.exports = router;