# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#lecturer = Lecturer.new
lecturer = Lecturer.create([{name: "Mary Kimani", institution: "University of Nairobi"}, {name: "Gibson Bonareri", institution: "DayStar University"}, {name: "John Maina", institution: "Mt Kenya University"}])
#Lecturer.create(name: "Mary Kimani").valid?
#Lecturer.create(name: nil).valid?
Profile.create!(bio:"male",username:"kim", student_id:1)
Profile.create!(bio:"male" ,username:"mike" , student_id:2)
Profile.create!(bio:"female" ,username:"cindy" , student_id:3)
Profile.create!(bio:"female" ,username:"joy" , student_id:4)
Profile.create!(bio:"male" ,username:"omosh" , student_id:5)
Profile.create!(bio:"male" ,username:"juma" , student_id:6)
Profile.create!(bio:"male" ,username:"manu" , student_id:7)
