const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const {
	authRouter,
	usersRouter,
	coursesRouter,
	enrollRouter,
	examsRouter,
} = require('./routes');
const { errorHandler, notFound } = require('./middlewares');
const User = require('./models/user');
const Enrollment = require('./models/enrollment');
const config = require('./config');

const app = express();

app.use(morgan('dev'));

app.use(
	cors({
		origin: config.app.backendBaseUrl,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	}),
);

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
	res.send('Welcome to UMKM Grow API');
});

app.use('/api/auth', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/enrollment', enrollRouter);
app.use('/api/exams', examsRouter);
app.use('/api/users', usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
