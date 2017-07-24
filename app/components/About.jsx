var React = require('react');
var dataSvc = require('dataSvc');
var Tool = require('Tool');
var ErrorModal = require('ErrorModal');

var About = React.createClass({

	getInitialState: function () {
		return {
			toolList: {},
			isLoading: false,
			toolError: false,
			errorMsg: undefined
		}
	},
	componentDidMount: function () {
		this.getTools();
	},
	getTools: function(){
		let that = this;
		this.setState({
			isLoading: true,
			toolError: false,
			errorMsg: undefined
		})

		dataSvc.getTools()
			.then(function (res) {
				that.setState({
					toolList: res,
					isLoading: false
				})
			}, function (e) {
				that.setState({
					isLoading: false,
					toolError: true,
					errorMsg: e.message
				},
					that.setState({
						isLoading: false,
						toolError: true,
						errorMsg: e.message
					})
				)
			})
	},
	render: function () {
		var {isLoading, toolList, toolError, errorMsg} = this.state;

		function RenderToolList(){
			if(typeof toolList.tools !== 'undefined'){
				return (
					<div className="grid-x grid-margin-x grid-padding-x small-up-2 medium-up-3 large-up-4">
					{
							toolList.tools.map(function(tool, i) {
								return (
									<div key={i} className="cell">
										<Tool tool={tool}/>
									</div>
								)
							})
						}
					</div>
				)
			} else {
				return <p>rocks, paper, scissors.</p>
			}
		}

		function RenderError(){
			if(toolError){
				return(
					<ErrorModal msg={errorMsg} title="nuts..."/>
				)
			}
		}

		function RenderLoader() {
			if (isLoading) {
				return <p className="text-center">fetching tools ...</p>
			}
		}

		return (
			<div className="about">

				<div className="callout secondary">
					<h5>React Trains</h5>
					<p>This is a simple app that I built in order to learn the fundamentals of React. The various tools, plugins, and services used to create this app are listed below.</p>
					<ul>
						<li>Github repo: <a href="https://github.com/bill209/reactTrains">github.com/bill209/reactTrains</a></li>
						<li>Heroku demo: <a href="http://reacttrains.herokuapp.com/">herokuapp.com/</a></li>
					</ul>
				</div>

				<RenderToolList />
				{RenderLoader()}
				{RenderError()}
			</div>
		);
	}
});

module.exports = About;

