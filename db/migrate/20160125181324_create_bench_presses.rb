class CreateBenchPresses < ActiveRecord::Migration
  def change
    create_table :bench_presses do |t|
      t.integer :athlete_id, null: false
      t.integer :weight, null: false
      t.integer :reps, null: false
      t.datetime :date, null: false
      t.timestamps null: false
    end
  end
end
