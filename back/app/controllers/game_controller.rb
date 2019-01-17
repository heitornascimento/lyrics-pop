class GameController < ApplicationController

  def index
    @quest = Quest.new
    @quest.question = "Bla"
    @quest.options = "foo1?;foo2?;foo3?"
    @quest.answer_idx = 1
  end

end
