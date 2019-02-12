class CreateUserWords < ActiveRecord::Migration[5.2]
  def change
    create_table :user_words do |t|
      t.integer :user_id
      t.string :word_id

      t.timestamps
    end
  end
end
