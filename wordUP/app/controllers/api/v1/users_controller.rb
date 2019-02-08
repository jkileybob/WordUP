class Api::V1::UsersController < ApplicationController

  #GET ALL
    def index
      render json: User.all
    end

  #GET
    def show
      render json: User.find(params[:id])
    end

  #POST
    def create
      render json: User.create(user_params)
    end

  #PATCH
    def update
      User.find(params[:id]).update(user_params)
      render json: User.find(params[:id])
    end

  #DELETE
  def destroy
    render json: User.find(params[:id]).destroy
  end


  private

  def user_params
    params.permit(:user_id, :word_card)
  end

end
