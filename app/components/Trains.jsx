var React = require('react');
var TrainList = require('TrainList');
var TrainPic = require('TrainPic');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var trainsSvc = require('trainsSvc');
var ErrorModal = require('ErrorModal');

var Trains = React.createClass({
	getInitialState: function () {
		return {
			trainList: {},
			isLoading: false,
			trainError: false
		}
	},
	handleSearch: function (loc) {
		var that = this;
		this.setState({
			isLoading: true,
			wxError: false,
			errorMsg: undefined
		});

		openWxMap.getTemp(loc).then(function (temp) {
			that.setState({
				location: loc,
				temp: temp,
				isLoading: false
			})
		}, function (e) {
			that.setState({
				isLoading: false,
				wxError: true,
				errorMsg: e.message
			});
		})
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


	render: function () {
		var {isLoading, trainList, trainError, errorMsg} = this.state;

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

		function RenderTrainList(props) {
			if (typeof props.trainList.trains !== 'undefined') {
				return <TrainList trainList={props.trainList.trains}/>
			} else {
				return <p>no trains yet...</p>
			}
		}

		return (
			// if(typeof this.state.trainList.trains !== 'undefined'){
			<div className="row">
				<div className="small-6 columns">
					<div className="callout secondary large">

						<RenderTrainList trainList={trainList}/>
						{renderMessage()}
						{renderError()}

						</div>
				</div>
				<div className="small-6 columns">
					<TrainPic />
				</div>
				<form onSubmit={this.onFormSubmit}>
					<button className="button hollow expanded">Get Trains</button>
				</form>
			</div>
		)
	}
});

module.exports = Trains;