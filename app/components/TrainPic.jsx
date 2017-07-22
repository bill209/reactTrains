var React = require('react');

var TrainPic = React.createClass({
	render: function () {
		var {trainIdx, trainList} = this.props;

		function RenderTrainDetail() {
			if (trainIdx !== null) {
				return (
					<div className="callout secondary large">
						<img src={"/trains/" + trainList.trains[trainIdx].img}
								 alt="Default"
								 title=""
								 className="" />
					</div>
				)
			} else {
				return <p>please click on a train</p>
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