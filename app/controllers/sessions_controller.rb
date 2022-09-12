class SessionsController < ApplicationController

  # session create
  # handles user login + authentication
  # if auth, updates session hash and renders user profile
  # if not auth, returns json error
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id 
      return render json: user, status: :created
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end 
  end 

  # sessions destroy
  # handles user logout
  # deletes user_id from session hash
  # returns no_content or json error if not
  #  logged in 
  def destroy
    if session[:user_id]
      session.delete :user_id
      head :no_content
    else
      render json: { errors: ['You are not logged in'] }, status: :unauthorized
    end 
  end 

end
