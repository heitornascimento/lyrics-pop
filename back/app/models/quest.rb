class Quest < ApplicationRecord

  def options_array
    self.options.split(';') unless self.options.blank?
  end
end
