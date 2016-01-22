var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchAthletes: function(){
    $.get('/api/athletes', function(athletes){
      ApiActions.receiveAllAthletes(athletes);
    });
  }
};

module.exports = ApiUtil;
