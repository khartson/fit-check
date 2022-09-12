class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # create new user and save to db 
  # save user to session hash
  # return the created user
  def create
    user = User.create!(user_params)
    session[:id] = user.id
    render json: user, status: :created
  end 


  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :name, :bio, :pfp_url)
  end 

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

end
