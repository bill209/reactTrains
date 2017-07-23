var React = require('react');

var Tool = ({tool}) => {
	return (
			<div className="card">
				<div className="card-divider">
					{tool.tool}
				</div>
				<img src="trains/alaska.jpg"/>
				<div className="card-section">
					<h4>This is a card.</h4>
					<p>It has an easy to override visual style, and is appropriately subdued.</p>
				</div>
			</div>
	);
};

module.exports = Tool;

