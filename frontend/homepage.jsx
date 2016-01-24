var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Test = require('./components/Test');
var ApiUtil = require('./util/api_util');
var AthleteProfile = require('./components/AthleteProfile');



var App = React.createClass({
  componentWillMount: function(){
    var that = this;
    ApiUtil.fetchAthletes();
  },

  render: function(){

    return (
      <div className="app-body">
        <h1>this is where a header can go</h1>
      {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Test}></IndexRoute>
    <Route path="athlete/:athleteId" component={AthleteProfile}></Route>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
