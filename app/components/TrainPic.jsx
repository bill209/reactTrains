var React = require('react');

var TrainPic = React.createClass({
	render: function () {
		var {trainIdx, trainList} = this.props;

		function RenderTrainDetail() {
			if (trainIdx !== null) {
				return (
					<div className="callout secondary large">
						<img src={"/trains/" + trainList.railroads[trainIdx].img}
								 alt="Default"
								 title=""
								 className="" />
					</div>
				)
			} else {
				return (
					<div className="callout secondary large">
						<h5>No Train Selected</h5>
						<p>please click on a train in the train list.</p>
					</div>
					)
			}
		}

		return (
			<div>
				{RenderTrainDetail()}
			</div>
		)
	}
});

module.exports = TrainPic;