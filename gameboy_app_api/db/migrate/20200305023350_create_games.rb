class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :rating
      t.string :description
      t.integer :release
      t.string :genre

      t.timestamps
    end
  end
end
