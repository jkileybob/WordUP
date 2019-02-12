class UserSerializer < ActiveModel::Serializer
  has_many :user_words
  has_many :words, through: :user_words
  attributes :id, :word_card
end
