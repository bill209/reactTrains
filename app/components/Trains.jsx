var React = require('react');
var TrainList = require('TrainList');
var TrainPic = require('TrainPic');
var dataSvc = require('dataSvc');
var ErrorModal = require('ErrorModal');

var Trains = React.createClass({
	componentDidMount: function () {
		this.getTrainList();
	},
	getInitialState: function () {
		return {
			trainList: {},
			chosenTrain: null,
			isLoading: false,
			trainError: false
		}
	},
	onFormSubmit: function (e) {
		e.preventDefault();
		this.getTrainList();
	},
	getTrainList: function () {
		let that = this;

		this.setState({
			isLoading: true,
			trainError: false,
			errorMsg: undefined
		});

		dataSvc.getRailroads()
			.then(function (res) {
				that.setState({
					trainList: res,
					isLoading: false,
				})
			}, function (e) {
				that.setState({
					isLoading: false,
					trainError: true,
					errorMsg: e.message
				})
			})
	},

	handleClick: function (idx) {
		this.setState({
			chosenTrain: idx
		})
	},

	render: function () {
		var that = this;
		var {isLoading, trainList, chosenTrain, trainError, errorMsg} = this.state;

		function RenderTrainList() {

			if (typeof trainList.railroads !== 'undefined') {
				return <TrainList onTrainClick={that.handleClick}
													trainList={trainList.railroads}/>
			} else {
				return <p>no railroads yet...</p>
			}
		}

		function RenderError(){
			if(trainError){
				return(
					<ErrorModal msg={errorMsg} title="crazy!"/>
				)
			}
		}

		function RenderLoader() {
			if (isLoading) {
				return <p className="text-center">fetching trains ...</p>
			}
		}

		return (
			// if(typeof this.state.trainList.trains !== 'undefined'){
			<div className="trains grid-x grid-margin-x small-up-1 medium-up-2">
				<div className="cell">
					<div className="callout secondary large">

						<RenderTrainList />
						{RenderLoader()}
						{RenderError()}

					</div>
				</div>

				<div className="cell">
					<TrainPic trainList={trainList} trainIdx={chosenTrain}/>
				</div>
			</div>
		)
	}
});

module.exports = Trains;