require('dotenv').config();
const express = require('express');
const router = express.Router();

const { Journey } = require('../models');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/', function (req, res, next) {
  res.status(200);
  res.render('index', { title: "프로젝트 시작" });
});

router.get('/Journey', async function (req, res, next) {
  await Journey.create({
    memo: "abcabc",
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  })
  /*
  let suggestionsData = new Array;
  await Suggestion.findAll().then((data) => {
      console.log("Suggestions database called");
      let i = 0;
      while (data[i]) {
        const content = data[i].dataValues.content;
        suggestionsData.push(content);
        ++i;
      }
    }).catch((err) => {
      console.log("Sequelize selection err");
      next(err);
    });
  res.status(200).render('../views/suggestions', {
    title: `Suggestions`,
    data: suggestionsData,
  });
  */
});
module.exports = router;