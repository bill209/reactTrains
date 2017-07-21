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
							Common Carrier Freight Railroads in the United States<br/>
							a small sampling...
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{color: 'red'}}>About</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;

