class CreateSongs < ActiveRecord::Migration
  def self.up
    create_table :songs do |t|
      t.integer :position
      t.string :title
      t.string :mp3_file_name
      t.string :mp3_content_type
      t.integer :mp3_file_size
      t.datetime :mp3_updated_at
      t.string :ogg_file_name
      t.string :ogg_content_type
      t.integer :ogg_file_size
      t.datetime :ogg_updated_at
      t.string :description

      t.timestamps
    end
  end

  def self.down
    drop_table :songs
  end
end
