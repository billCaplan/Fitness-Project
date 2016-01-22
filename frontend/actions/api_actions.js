var AppDispatcher = require('../dispatcher/Dispatcher');
var AthleteConstants = require('../constants/athlete_constants');


var ApiActions = {
  receiveAllAthletes: function(athletes){

    AppDispatcher.dispatch({
      actionType: AthleteConstants.ATHLETES_RECEIVED,
      athletes: athletes
    });
  }

};

module.exports = ApiActions;
