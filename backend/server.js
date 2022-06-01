// Server side file, import all Routes(Views) and execute them here.
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8081;
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
	cors({
		origin: 'https://bookowl-u08.netlify.app',
		credentials: true,
	})
);
app.use(function (req, res, next) {
	res.header('Content-Type', 'application/json;charset=UTF-8');
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/uploads', express.static('./uploads'));

app.get('/', (req, res) => {
	return res.json({ message: 'Hello World 🤘' });
});

//Function to start the server
const startServer = (port) => {
	try {
		app.listen(port, () => {
			console.log(`Server up and running`);
		});
	} catch (error) {
		console.error(error);
		process.exit();
	}
};

//server connection starts here
mongoose.connect(process.env.DATABASE_URL).then(() => {
	startServer(PORT);
});
