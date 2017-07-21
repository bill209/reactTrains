var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are few examples to try out:</p>
			<ol>
				<li>
					<Link to="/?location=apex">Apex, NC</Link>
				</li>
				<li>
					<Link to="/?location='gulf shores'">Gulf Shores, AL</Link>
				</li>
				<li>
					<Link to="/?location='tokyo'">Tokyo, Japan</Link>
				</li>
				<li>
					<Link to="/?location='hamilton, bermuda'">Hamilton, Bermuda</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;