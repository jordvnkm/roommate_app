class Api::User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :email, :session_token presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :username, :email, uniqueness: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = Api::User.find_by(username: username)

    return nil if user.nil?

    if user.is_password(password)
      return user
    else
      return nil
    end
  end
end
