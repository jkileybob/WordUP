class WordSerializer < ActiveModel::Serializer
  has_many :user_words
  has_many :users, through: :user_words
  attributes :id, :word, :phonetic, :meaning
end
