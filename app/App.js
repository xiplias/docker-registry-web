/** @jsx React.DOM */

var Header = require("./Header.js");

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="clearfix">
						<div className="col col-12">
							{this.props.activeRouteHandler()}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
