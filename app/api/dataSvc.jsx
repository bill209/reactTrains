var axios = require('axios');

let url = '';

if (false) {
	url = 'http://localhost:8080';
} else {
	url = 'http://sillyserver.herokuapp.com';
}

module.exports = {
	getRailroads: function () {
		return axios.get(url + '/api/railroads')
			.then(function (res) {
				console.log("dataSvc - success: ",res);
				return res.data
			}).catch(function (err) {
				console.log("dataSvc - failure: ",err);
				return err;
			});
	},
	getTools: function () {
		return axios.get(url + '/api/tools')
			.then(function (res) {
				return res.data
			}, function (err) {
				throw new Error('xxx: ', err);
			});
	}
}
;
