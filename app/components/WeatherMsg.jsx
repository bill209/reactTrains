var React = require('react');

var WeatherMsg = ({temp, location}) => {
		return (
			<p className="text-center">{temp} degrees (F) in {location}</p>
		);
};

module.exports = WeatherMsg;