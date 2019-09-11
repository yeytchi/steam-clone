class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :price
      t.string :video_url
      t.string :icon_url
      t.string :image_url
      t.string :release_date
      t.integer :release_year

      t.timestamps
    end
  end
end
