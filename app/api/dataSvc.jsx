var axios = require('axios');
var trainData = require('trainData');
var toolData = require('toolData');

module.exports = {

	getTrains: function () {
		return new Promise(function (resolve, reject) {
			if (trainData() !== null) {
				resolve(trainData());
			} else {
				reject({message: 'unable to fetch choo-choos'});
			}
		})
	},
	getTools: function () {
		return new Promise(function (resolve, reject) {
			if (trainData() !== null) {
				resolve(toolData());
			} else {
				reject({message: 'no tools found'});
			}
		})
	}
};
