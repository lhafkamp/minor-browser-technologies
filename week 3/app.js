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

let data = [];

// post form data
app.post('/', (req, res) => {
	data.push(req.body.ingredients);
	res.redirect('/');
})

// clear data
app.get('/clear', (req, res) => {
	data = [];
	res.render('index', {
		data: data
	});
})

// get form data
app.get('/', (req, res) => {
	res.render('index', {
		data: data
	});
});

// run app on 9000
app.listen(3001, () => {
	console.log('running on 3001...');
});