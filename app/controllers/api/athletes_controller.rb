class Api::AthletesController < ApplicationController
  def index
    @athletes = Athlete.all
  end


end
