const express = require('express');
const morgan = require('morgan');
const { authRouter } = require('./routes');
const { errorHandler, notFound } = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to UMKM Grow API');
});

app.use('/api/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
