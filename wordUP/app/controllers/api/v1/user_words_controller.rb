class Api::V1::UserWordsController < ApplicationController

  def index
    render json: UserWord.all
  end

  def show
    render json: UserWord.find(params[:id])
  end

  def create
    render json: UserWord.create(user_word_params)
  end

  def update
    UserWord.find(params[:id]).update(user_word_params)
    render json: UserWord.find(params[:id])
  end

  def destroy
    render json: UserWord.find(params[:id]).destroy
  end

  
  private

  def user_word_params
    params.permit(:user_id, :word_id)
  end

end
