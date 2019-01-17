class CreateQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.string :question
      t.string :options
      t.integer :answer_idx

      t.timestamps
    end
  end
end
