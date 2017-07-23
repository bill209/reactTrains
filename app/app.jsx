var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Trains = require('Trains');
var About = require('About');
var Nav = require('Nav');

// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// load css
require('style!css!appStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<IndexRoute component={Trains}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
