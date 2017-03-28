// require modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// get the public files
app.use(express.static('public'));

// ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use body parser and make it json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// post form data
app.get('/', (req, res) => {
	const data = req.query.ingredients;
	res.render('index', {
		data: data
	});
});

// run app on 9000
app.listen(3001, () => {
	console.log('running on 3001...');
});