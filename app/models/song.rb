class Song < ActiveRecord::Base
  has_attached_file :ogg
  has_attached_file :mp3
end
