class Api::User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :username, :email, uniqueness: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = Api::User.find_by(email: email)

    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end


  def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
