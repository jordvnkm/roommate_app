class Api::SessionsController < ApplicationController
  def show
    @user = current_user

    if @user
      render 'api/users/show'
    else
      render 'api/shared/error', status: 404
    end
  end

  def create
    @user = Api::User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login_user(@user)
      render 'api/users/show'
    else
      @errors = ['invalid username/password']
      render 'api/shared/error', status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_user
      render 'api/users/show'
    else
      @errors = ['nobody logged in']
      render 'api/shared/error'
    end
  end
end
