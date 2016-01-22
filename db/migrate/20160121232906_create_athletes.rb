class CreateAthletes < ActiveRecord::Migration
  def change
    create_table :athletes do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.datetime :birthday, null: false
      t.integer :height
      t.integer :weight
      t.string :sport

      t.timestamps null: false
    end
  end
end
