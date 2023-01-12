# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#lecturer = Lecturer.new
Lecturer.create([{name: "Mary Kimani", institution: "University of Nairobi", email:"emanu@gmail.com"}, {name: "Gibson Bonareri", institution: "DayStar University", email:"emanu@gmail.com"}, {name: "John Maina", institution: "Mt Kenya University",email:"emanu@gmail.com"}])
#Lecturer.createname: "Mary Kimani").valid?
#Lecturer.createname: nil).valid?



Profile.create(bio:"male",username:"kim",supervisor_id:1, student_id:1)
Profile.create(bio:"male" ,username:"mike" ,supervisor_id:2, student_id:2)
Profile.create(bio:"female" ,username:"cindy" ,supervisor_id:3, student_id:3)
Profile.create(bio:"female" ,username:"joy" ,supervisor_id:1, student_id:4)
Profile.create(bio:"male" ,username:"omosh" ,supervisor_id:2, student_id:5)
Profile.create(bio:"male" ,username:"juma" ,supervisor_id:4, student_id:6)
Profile.create(bio:"male" ,username:"manu" ,supervisor_id:2, student_id:7)


Supervisor.create(name:"briann",username:"briann", email:"briannmanu@gmil.com", password:"123456789")
Supervisor.create(name:"victor",username:"victor", email:"victormanu@gmil.com", password:"123456789")
Supervisor.create(name:"mercyy",username:"mercyy", email:"mercyymanu@gmil.com", password:"123456789")
Supervisor.create(name:"joan",username:"joan", email:"joanmanu@gmil.com", password:"123456789")


Student.create(supervisor_id: 1, name:"Manu1", username: "Manu1", lecturer_id: 1,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu1@gmail.com" "manu1@gmail.com",password:"123456789" , institution:"inst1" , lecturer_email:"lec1@gmail.com" )
Student.create(supervisor_id: 2, name: "Manu2", username: "Manu2", lecturer_id: 2,course: "BCOM", start_date:"1/1/2023" , end_date:"1/4/2023" , department: "COMMERCE", email:"manu1@gmail.com" ,password:"123456789" , institution: "inst1" , lecturer_email: "lec1@gmail.com")
Student.create(supervisor_id: 3, name: "Manu3", username: "Manu3", lecturer_id: 3,course:"IT" , start_date: "1/1/2023", end_date: "1/4/2023", department: "TECH", email:"manu1@gmail.com" ,password:"123456789" , institution: "inst1" , lecturer_email:"lec1@gmail.com" )
Student.create(supervisor_id: 4, name: "Manu4", username: "Manu4", lecturer_id: 3,course: "ART", start_date: "1/1/2023", end_date:"1/4/2023" , department: "TECH", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  , lecturer_email:"lec1@gmail.com" )
Student.create(supervisor_id: 5, name: "Manu5", username: "Manu5", lecturer_id: 4,course: "CODING", start_date: "1/1/2023", end_date: "1/4/2023", department:"TECH" , email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  , lecturer_email: "lec1@gmail.com")
Student.create(supervisor_id: 6, name: "Manu6", username: "Manu6", lecturer_id: 5,course: "PROGRAMMING", start_date: "1/1/2023", end_date: "1/4/2023", department:"TECH" , email:"manu1@gmail.com" ,password:"123456789" , institution: "inst1" , lecturer_email:"lec1@gmail.com" )
Student.create(supervisor_id: 2, name: "Manu7", username: "Manu7", lecturer_id: 2,course: "TEACHING", start_date: "1/1/2023", end_date: "1/4/2023", department: "ART", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  , lecturer_email: "lec1@gmail.com")
