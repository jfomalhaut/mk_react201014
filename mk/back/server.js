const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const PORT = process.env.PORT || 4000;
dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
	res.send('<h1>Hello</h1>')
});

app.get('/signup', (req, res, next) => {
	res.send('<h1>Success</h1>')
});

app.post('/signin', (req, res, next) => {
	const {body: {username, password}} = req;
	if(username === USERNAME && password == PASSWORD) {
		res.send(true);
	} else {
		res.send(false);
	}
	res.send('<h1>signup</h1>')
});

app.get('/getDate', (req, res, next) => {
	const {query} = req;
	console.log(query);
	res.send(true);
});

app.get('/process', process1, process2);

function process1(req, res, next) {
	console.log('process1 작동');
	next();
}

function process2(req, res , next) {
	console.log('process2 작동');
	res.send('종료');
}


app.listen(PORT, () => {
	console.log('start');
})