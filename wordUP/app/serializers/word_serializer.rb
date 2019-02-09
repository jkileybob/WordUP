class WordSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :word, :phonetic, :meaning, :user_id
end
