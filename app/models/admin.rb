class Admin < ActiveRecord::Base
  devise :database_authenticatable, :lockable, :rememberable, :trackable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
end
