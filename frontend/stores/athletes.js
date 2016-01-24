var Store = require('flux/utils').Store;
var AthleteConstants = require('../constants/athlete_constants');
var AppDispatcher = require('../dispatcher/Dispatcher');

var AthleteStore = new Store(AppDispatcher);

var _athletes = [];

var resetAthletes = function(athletes){
  _athletes = athletes.slice(0);
};

var addNewAthlete = function(newAthlete){
  _athletes.push(newAthlete);
};

AthleteStore.findAthlete = function(athleteId){
  var targetAthleteId = parseInt(athleteId);
  var athletes = AthleteStore.all();
  var targetAthlete = {string: "Bad User"};

  athletes.forEach(function(athlete){
    if (athlete.id === targetAthleteId){
      targetAthlete = athlete;
    }
  });
  return targetAthlete;

};

AthleteStore.all = function () {
  return _athletes.slice(0);
};

AthleteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AthleteConstants.ATHLETE_RECEIVED:
      // var result = addNewAthlete(payload.newAthlete);
      var result = resetAthletes(payload.athlete);
      AthleteStore.__emitChange();
      break;
    case AthleteConstants.ATHLETES_RECEIVED:
      var result = resetAthletes(payload.athletes);
      AthleteStore.__emitChange();
      break;
    case AthleteConstants.ATHLETE_REMOVED:
      var result = resetAthletes(payload.athletes);
      AthleteStore.__emitChange();
  }
};

module.exports = AthleteStore;
