const axios = require('axios');

const getCatFact = async (req, res, next) => {
	try {
		const response = await axios.get(
			'https://catfact.ninja/fact?max_length=140'
		);
		console.log(response);
		const fact = response.data.fact;

		res.status(200).json({
			data: fact,
		});
	} catch (error) {
		res.status(500).json({
			message: 'error',
			errorMessage: error.message,
		});
	}
};

module.exports = {
	getCatFact,
};
