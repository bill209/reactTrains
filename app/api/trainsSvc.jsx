var axios = require('axios');
var trainData = require('trainData');

const OPEN_WX_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';

module.exports = {

	getTrains: function(){
		return new Promise(function(resolve, reject){
			resolve(trainData());
		})
	}
}