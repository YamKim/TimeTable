require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

//var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const path = require('path');

const PORT = process.env.PORT || 3000;

// NOTE 로그를 위한 모듈
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
	console.error(err);
	res.status(404).send('Not Found');
})

const db = require('./models');
db.sequelize.sync().then((req) => {
	app.listen(PORT, () => {
		console.log(`Server running at ${PORT}`);
	});
})