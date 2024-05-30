const app = require('./app');
const config = require('./config');
const sequelize = require('./config/database');

const HOST =
	config.app.env === 'production' ? config.app.hostProd : config.app.hostDev;
const PORT = config.app.port;

sequelize.sync().then(() => {
	console.log('Database synchronized');
	app.listen(PORT, HOST, () =>
		console.log(`Server running on port http://${HOST}:${PORT}`),
	);
});

module.exports = app;
