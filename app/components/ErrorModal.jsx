var React = require('react');

var ErrorModal = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		msg: React.PropTypes.string.isRequired,
	},
	getDefaultProps: function(){
		return {
			title: 'Error'
		}
	},
	componentDidMount: function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		var {title, msg} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{msg}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		)
	}
});

module.exports = ErrorModal;