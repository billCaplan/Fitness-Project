var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Test = require('./components/Test');
var ApiUtil = require('./util/api_util');



var App = React.createClass({
  componentWillMount: function(){
    var that = this;
    ApiUtil.fetchAthletes();
  },

  render: function(){

    return (
      <div className="app-body">
        <h1>This is the best site ever</h1>
      {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Test}></IndexRoute>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
