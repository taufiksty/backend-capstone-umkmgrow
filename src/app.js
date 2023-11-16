const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { authRouter, usersRouter, coursesRouter } = require('./routes');
const { errorHandler, notFound } = require('./middlewares');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
	res.send('Welcome to UMKM Grow API');
});

app.use('/api/auth', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
