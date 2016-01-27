class BenchPress < ActiveRecord::Base
  validates :athlete_id, :weight, :reps, :date, presence: true

belongs_to(
:athlete,
foreign_key: :athlete_id,
primary_key: :id,
class_name: "Athlete"
)
end
