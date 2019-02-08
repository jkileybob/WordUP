class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
      t.string :word
      t.string :phonetic
      t.string :meaning
      t.integer :user_id

      t.timestamps
    end
  end
end
