import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
	res.send(`<h1>Hello, Nodejs!</h1>`)
});

app.post('/signin', (req, res, next) => {
	const { body: { username, password } } = req;
	if (username === USERNAME && password === PASSWORD) {
		res.send(true);
	} else {
		res.send(false);
	}
});

app.get('/getData', (req, res, next) => {
	const { query } = req;
	console.log(query);
	res.send(true);
});

app.get('/process', process1, process2);

function process1(req, res, next) {
	console.log('process1 작동');
	next();
} 

function process2(req, res, next) {
	console.log('process2 작동');
	res.send('종료');
} 


app.listen(PORT, () => {
	console.log(`START EXPRESS SERVER, PORT NUMBER : ${PORT}`);
});