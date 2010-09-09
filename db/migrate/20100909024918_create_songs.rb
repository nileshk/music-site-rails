class CreateSongs < ActiveRecord::Migration
  def self.up
    create_table :songs do |t|
      t.integer :position
      t.string :title
      t.string :mp3
      t.string :ogg
      t.string :description

      t.timestamps
    end
  end

  def self.down
    drop_table :songs
  end
end
