class GameController < ApplicationController

  def index
    @quest = Quest.all.sample
  end

end
