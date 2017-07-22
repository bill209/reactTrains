var React = require('react');
var TrainDetail = require('TrainDetail');

var TrainList = React.createClass({

		trainClick: function(idx){
			this.props.onTrainClick(idx);
		},

		render: function (props) {
			var {trainList} = this.props;
			var that = this;
			function RenderTrainDetail() {
				if (typeof trainList !== 'undefined' &&
					trainList.length > 0) {
					return (
						<div>
							{trainList.map(function (train, i) {
								return (
									<div key={i} onClick={that.trainClick.bind(null, i)}>
										<TrainDetail trainInfo={train}/>
									</div>
								)
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
	})
	;

module.exports = TrainList;