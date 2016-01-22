var React = require('react');
var AthleteStore = require('../stores/athletes');
var ApiUtil = require('../util/api_util');


var Test = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    return {
      athletes: AthleteStore.all()
    };
  },
  componentDidMount: function(){
    this.athleteListener = AthleteStore.addListener(this._athletesChanged);
  },
  componentWillUnmount: function(){
    this.athleteListener.remove();
  },
  _athletesChanged: function(){

    this.setState({athletes: AthleteStore.all()});
  },

  render: function(){
    things = this.state.athletes.map(function(athlete){
      return <div>{athlete.first_name}</div>;
    });
    return(

    <div>
      <div><h1>In the Test</h1></div>
      {things}

    </div>

    );
  }

});

module.exports = Test;
