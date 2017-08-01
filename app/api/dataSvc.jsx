var axios = require('axios');
var trainData = require('trainData');
var toolData = require('toolData');

module.exports = {

	getRailroads: function () {
		return axios.get('http://localhost:8080/api/railroads')
			.then(function (res) {
				console.log("res.data", res.data);
				return res.data
			}, function (err) {
				console.log("err", err);
				throw new Error('no data found: ', err);
			});
	},
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
		return axios.get('http://localhost:8080/api/tools')
			.then(function (res) {
				console.log("res", res);
				return res.data
			}, function (err) {
				console.log("err", err);
				throw new Error('xxx: ', err);
			});
	},
	getTools_old: function () {
		return new Promise(function (resolve, reject) {
			if (toolData() !== null) {
				resolve(toolData());
			} else {
				reject({message: 'no tools found'});
			}
		})
	}
};
