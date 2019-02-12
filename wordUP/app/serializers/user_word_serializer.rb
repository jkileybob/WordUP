class UserWordSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :word
  attributes :user_id, :word_id
end
