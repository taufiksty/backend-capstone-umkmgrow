const convertToSnakeCase = (string) => {
	return string
		.split(/[\s\-()&]+/gi)
		.join('_')
		.toLowerCase();
};

const parse = (string) => {
	return JSON.parse(string);
};

const stringify = (data) => {
	return JSON.stringify(data);
};

module.exports = { convertToSnakeCase, parse, stringify };
