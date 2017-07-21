var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>A small sample app built using the following tools:</p>
			<ol>
				<li>
					<Link to="https://facebook.github.io/react/">React</Link>
				</li>
				<li>
					<Link to="http://foundation.zurb.com/">Foundation</Link>
				</li>
				<li>
					<Link to="https://nodejs.org/en/">Node</Link>
				</li>
				<li>
					<Link to="http://expressjs.com/">Express</Link>
				</li>
				<li>
					<Link to="https://webpack.github.io/">Webpack</Link>
				</li>
				<li>
					<Link to="https://www.npmjs.com/package/axios">Axios</Link>
				</li>
				<li>
					<Link to="https://dashboard.heroku.com/apps">Heroku</Link>
				</li>
				<li>
					<Link to="https://github.com/bill209/reactWx">GitHub repo for this app</Link>
				</li>
				<li>
					<Link to="http://openweathermap.org">Thanks to OpenWeatherMap!</Link>
				</li>

				{/*
				<li>
					<Link to=""></Link>
				</li>
*/}
			</ol>
		</div>
	)
}

module.exports = About;