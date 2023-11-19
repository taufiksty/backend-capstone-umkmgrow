const convertToSnakeCase = (string) => {
	return string
		.split(/[\s\-()&]+/gi)
		.join('_')
		.toLowerCase();
};

module.exports = { convertToSnakeCase };
