var React = require('react');
var {Link} = require('react-router');
var Tool = require('Tool');
var dataSvc = require('dataSvc');

var About = React.createClass({

	getInitialState: function () {
		return {
			toolList: {}
		}
	},
	componentDidMount: function () {
		console.log('mounted');
		this.getTools();
	},
	getTools: function(){
		let that = this;

		dataSvc.getTools()
			.then(function (res) {
				that.setState({
					toolList: res
				})
			}, function (e) {
				console.log('error', e);
			})
	},
	render: function () {
		var {toolList} = this.state;

		function RenderToolList(){
			if(typeof toolList.tools !== 'undefined'){
				return (
					<div className="grid-x grid-margin-x grid-padding-x small-up-2 medium-up-3 large-up-4">
					{
							toolList.tools.map(function(tool) {
								return (
									<div className="cell">
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
			</div>
		);
	}
});

module.exports = About;

