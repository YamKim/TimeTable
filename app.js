require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;
// NOTE 로그를 위한 모듈
const logger = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
	console.error(err);
	res.status(404).send('Not Found');
})

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}/`);
});