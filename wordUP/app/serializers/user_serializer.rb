class UserSerializer < ActiveModel::Serializer
  has_many :words
  attributes :id, :word_card
end
