var React = require('react');
var AthleteStore = require('../stores/athletes');
var ApiUtil = require('../util/api_util');

function _getApplicableAthlete(athleteId){
  var athlete = AthleteStore.findAthlete(athleteId);
  return athlete;
}

var AthleteProfile = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function(){
    var athlete_id = this.props.routeParams.athleteId;
    return {
      athlete_id: athlete_id,
      athlete: {},
    };
  },
  componentDidMount: function(){
    this.athleteListener = AthleteStore.addListener(this._athletesChanged);
  },
  componentWillUnmount: function(){
    this.athleteListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    var athleteId = this.props.routeParams.athleteId;
    this.setState({athlete_id: athleteId, athlete: AthleteStore.findAthlete(athleteId)});
  },

  _athletesChanged: function(){
    this.setState({athlete: _getApplicableAthlete(this.state.athlete_id)});
    window.scrollTo(0, 0);
  },

  render: function(){
    var athlete;

    if (this.state.athlete){
      athlete = this.state.athlete.first_name;
  } else {
      athlete = <div>Loading</div>;
  }


    return(
      <div>{athlete}</div>
    );
  }
});

module.exports = AthleteProfile;
