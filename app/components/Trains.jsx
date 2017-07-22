var React = require('react');
var TrainList = require('TrainList');
var TrainPic = require('TrainPic');
var trainsSvc = require('trainsSvc');
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

		trainsSvc.getTrains().then(function (res) {
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

		function renderMessage() {
			if (isLoading) {
				return <p className="text-center">fetching trains ...</p>
			}
		}

		function renderError() {
			if (trainError) {
				return (
					<ErrorModal msg={errorMsg} title="crazy!"/>
				)
			}
		}

		function RenderTrainList() {

			if (typeof trainList.trains !== 'undefined') {
				return <TrainList onTrainClick={that.handleClick}
													trainList={trainList.trains}/>
			} else {
				return <p>no trains yet...</p>
			}
		}

		return (
			// if(typeof this.state.trainList.trains !== 'undefined'){
			<div className="row">
				<div className="small-6 columns">
					<div className="callout secondary large">

						<RenderTrainList />
						{renderMessage()}
						{renderError()}

					</div>
				</div>
				<div className="small-6 columns">
					<TrainPic trainList={trainList} trainIdx={chosenTrain}/>
				</div>
				<form onSubmit={this.onFormSubmit}>
					<button className="button hollow expanded">Get Trains</button>
				</form>
			</div>
		)
	}
});

module.exports = Trains;