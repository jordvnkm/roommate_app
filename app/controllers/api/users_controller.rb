class Api::UsersController < ApplicationsController
  def index
    @users = Api::User.all

    if @users
      render 'api/users/index'
    else
      @errors = @users.errors.full_messages
      render 'api/shared/error', status: 404
    end
  end

  def show

  end

  def create

  end

  def update

  end

  
end
