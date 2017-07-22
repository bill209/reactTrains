var React = require('react');

var TrainDetail = React.createClass({
	test: function(){
		console.log("x");

	},
	render: function(props) {
		var {trainInfo} = this.props;
		return (
			<div className="trainDetail callout primary" >
				<div className="media-object">
					<div className="media-object-section">
						<div className="avatar-container">
							<img src={"/trains/" + trainInfo.img}
									 alt="Default avatar"
									 title="User Avatar"
									 className="ava2" />
						</div>

					</div>
					<div className="media-object-section">
						<h4>{trainInfo.railroad}</h4>
						<p>
							<span className="reportingMark">({trainInfo.reportingMark})</span>
							<span> - {trainInfo.status}, {trainInfo.beganYear} - {trainInfo.endYear}</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TrainDetail;
