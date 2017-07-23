var React = require('react');

var Tool = ({tool}) => {
	return (
			<div className="card">
				<div className="card-divider">
					{tool.tool}
				</div>
				<img src={"/logos/" + tool.logo} />
				<div className="card-section">
					<p>{tool.desc}</p>
					<p className="summary"><a href={tool.sourceUrl}>{tool.source}</a></p>
				</div>
			</div>
	);
};

module.exports = Tool;

