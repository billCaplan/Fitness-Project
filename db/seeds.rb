# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Athlete.create({
  first_name: "Dave",
  last_name: "Johnson",
  email: "dave@gmail.com",
  birthday: DateTime.new(1992,5,21),
  height: 160,
  weight: 175,
  sport: "hockey"
})

Athlete.create({
  first_name: "Mike",
  last_name: "Simmons",
  email: "mike@gmail.com",
  birthday: DateTime.new(1991,6,11),
  height: 111,
  weight: 375,
  sport: "hockey"
})
