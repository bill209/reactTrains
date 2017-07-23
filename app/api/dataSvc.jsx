var axios = require('axios');
var trainData = require('trainData');
var toolData = require('toolData');

const OPEN_WX_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';

module.exports = {

	getTrains: function(){
		return new Promise(function(resolve, reject){
			resolve(trainData());
		})
	},
	getTools: function(){
		return new Promise(function(resolve, reject){
			resolve(toolData());
		})
	}

}