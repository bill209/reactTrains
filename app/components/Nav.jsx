var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		alert('not yet');
	},
	render: function () {
		return (

			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							<Link to="/">
							Common Carrier Freight Railroads in the United States<br/>
							a small sampling...
							</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li>
							<IndexLink to="/" activeClassName="active">Trains</IndexLink>
						</li>
						<li>
							<IndexLink to="/about" activeClassName="active">About</IndexLink>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;

