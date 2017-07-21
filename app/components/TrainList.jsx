var React = require('react');
var TrainDetail = require('TrainDetail');

var TrainList = React.createClass({

	render: function (props) {
		var that = this;
		var {trainList} = this.props;

		function RenderTrainDetail() {

			if (typeof trainList !== 'undefined' &&
				trainList.length > 0) {
				return (
					<div>
						<p>hi</p>
						{trainList.map(function(train, i){
							return <TrainDetail key={i} trainInfo={train}/>
						})}
					</div>
				)
			} else {
				return <p>bummer, no trains</p>
			}
		}

		return (
			<div>
				{<RenderTrainDetail />}
			</div>
		)
	}
});

module.exports = TrainList;