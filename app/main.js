/** @jsx React.DOM */

React = require('react');
var Router = require('react-router');

// Components
var Images = require("./Images");

// Routes
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
Link = require('react-router').Link

if (DEBUG) {
	window.React = React; // Activates React dev-tools
}

var App = require('./App.js');

React.renderComponent((
	<Routes location="history">
		<Route path="/" handler={App} >
			<Route name="images" handler={Images} />
		</Route>
	</Routes>), document.body
);
