const app = require('./app');
const config = require('./config');

const HOST =
	config.app.env === 'production' ? config.app.hostProd : config.app.hostDev;
const PORT = config.app.port;

app.listen(PORT, HOST, () =>
	console.log(`Server running on port http://${HOST}:${PORT}`),
);
