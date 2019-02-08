class WordSerializer < ActiveModel::Serializer
  attributes :id, :word, :phonetic, :meaning, :user_id
end
