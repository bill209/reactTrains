var axios = require('axios');

let url = '';

if (false) {
	url = 'http://localhost:8080';
} else {
	url = 'http://sillyserver.herokuapp.com';
}

module.exports = {
	getRailroads_es6: function () {
		console.log('STARTING_ES6');
		return new Promise((resolve, reject) => {
			axios.get(url + '/api/railroads')
				.then(function (res) {
					console.log("res",res);
					resolve(res.data);
				})
				.catch(function (err) {
					console.log("err",err);
					reject(err);
				})
		})
	},

	getRailroads: function () {
		console.log('STARTING_5');
		return axios.get(url + '/api/railroads')
			.then(function (res) {
				console.log("dataSvc - success: ",res);

/*
				if(typeof res.data.message !== 'undefined'){
					throw new Error(res);
				}
*/
				return res.data
			}).catch(function (err) {
				console.log("dataSvc - failure: ",err);
				return err;
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
	}
	,
	getTools: function () {
		return axios.get(url + '/api/tools')
			.then(function (res) {
				return res.data
			}, function (err) {
				throw new Error('xxx: ', err);
			});
	}
	,
	getTools_old: function () {
		return new Promise(function (resolve, reject) {
			if (toolData() !== null) {
				resolve(toolData());
			} else {
				reject({message: 'no tools found'});
			}
		})
	}
}
;
