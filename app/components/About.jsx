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
			console.log("toolList-xxx",toolList);

			if(typeof toolList.tools !== 'undefined'){
				return (
					<div className="grid-x grid-margin-x small-up-3">
					{
							toolList.tools.map(function(tool) {
								return (
									<div className="cell test">
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
				<RenderToolList />
		);
	}
});

module.exports = About;

