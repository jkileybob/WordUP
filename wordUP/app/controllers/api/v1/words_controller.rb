class Api::V1::WordsController < ApplicationController

  def index
    @words = Word.all
      render json: @words
  end

  def show
    render json: Word.find(params[:id])
  end

  #POST
    def create
      render json: Word.create(word_params)
    end

  private

  def word_params
    params.permit(:word, :phonetic, :meaning)
  end


end
