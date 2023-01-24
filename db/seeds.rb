# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#lecturer = Lecturer.new
Lecturer.create([{name: "Mary Kimani", institution: "University of Nairobi", email:"emanu@gmail.com", password:"123456789"}, {name: "Gibson Bonareri", institution: "DayStar University", email:"emanu@gmail.com", password:"123456789"}, {name: "John Maina", institution: "Mt Kenya University",email:"emanu@gmail.com", password:"123456789"}])
#Lecturer.createname: "Mary Kimani").valid?
#Lecturer.createname: nil).valid?



# Profile.create(bio:"male",username:"kim", student_id:1)
# Profile.create(bio:"male" ,username:"mike",  student_id:2)
# Profile.create(bio:"female" ,username:"cindy", student_id:3)
# Profile.create(bio:"female" ,username:"joy", student_id:4)
# Profile.create(bio:"male" ,username:"omosh", student_id:5)
# Profile.create(bio:"male" ,username:"juma", student_id:6)
# Profile.create(bio:"male" ,username:"manu", student_id:7)


Supervisor.create(name:"briann",username:"briann", email:"briannmanu@gmil.com", password:"123456789")
Supervisor.create(name:"victor",username:"victor", email:"victormanu@gmil.com", password:"123456789")
Supervisor.create(name:"mercyy",username:"mercyy", email:"mercyymanu@gmil.com", password:"123456789")
Supervisor.create(name:"joan",username:"joan", email:"joanmanu@gmil.com", password:"123456789")


# Student.create(supervisor_id: 1, name:"Manu1", username: "Manu1", lecturer_id: 1,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  )
# Student.create(supervisor_id: 2, name:"Manu2", username: "Manu1", lecturer_id: 2,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu2@gmail.com" ,password:"123456789" , institution:"inst1"  )
# Student.create(supervisor_id: 2, name:"Manu3", username: "Manu1", lecturer_id: 3,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu3@gmail.com" ,password:"123456789" , institution:"inst1"  )
# Student.create(supervisor_id: 2, name:"Manu4", username: "Manu1", lecturer_id: 4,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu4@gmail.com" ,password:"123456789" , institution:"inst1"  )
# Student.create(supervisor_id: 2, name:"Manu5", username: "Manu1", lecturer_id: 5,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu5@gmail.com" ,password:"123456789" , institution:"inst1"  )
# Student.create(supervisor_id: 1, name:"Manu6", username: "Manu1", lecturer_id: 6,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  )

Student.create(supervisor_id: 1, name:"Manu1", username: "Manu1", lecturer_id: 1,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  )
Student.create(supervisor_id: 2, name:"Manu2", username: "Manu1", lecturer_id: 2,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu2@gmail.com" ,password:"123456789" , institution:"inst1"  )
Student.create(supervisor_id: 2, name:"Manu3", username: "Manu1", lecturer_id: 3,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu3@gmail.com" ,password:"123456789" , institution:"inst1"  )
Student.create(supervisor_id: 2, name:"Manu4", username: "Manu1", lecturer_id: 4,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu4@gmail.com" ,password:"123456789" , institution:"inst1"  )
Student.create(supervisor_id: 2, name:"Manu5", username: "Manu1", lecturer_id: 5,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu5@gmail.com" ,password:"123456789" , institution:"inst1"  )
Student.create(supervisor_id: 1, name:"Manu6", username: "Manu1", lecturer_id: 6,course: "BCOM", start_date: "1/1/2023", end_date: "1/4/2023", department: "COMMERCE", email:"manu1@gmail.com" ,password:"123456789" , institution:"inst1"  )


Task.create(student_id:1, supervisor_id:1, title: "This is the first task", description: "Carry out task one successfully", solution: "I carried out the first task.", comment: "This was challenging, but I managed to get it done.", completed: true)
Task.create(student_id:2, supervisor_id:1, title: "This is the second task", description: "Carry out task two successfully", solution: "I carried out the second task.", comment: "This was challenging, but I managed to get it done.", completed: true)
Task.create(student_id:3, supervisor_id:1, title: "This is the third task", description: "Carry out task three successfully", solution: "I carried out the third task.", comment: "This was challenging, but I managed to get it done.", completed: false)
Task.create(student_id:1, supervisor_id:1, title: "This is the fourth task", description: "Carry out task four successfully", solution: "I carried out the fourth task.", comment: "This was challenging, but I managed to get it done.", completed: true)
Task.create(student_id:2, supervisor_id:1, title: "This is the fifth task", description: "Carry out task five successfully", solution: "I carried out the fifth task.", comment: "This was challenging, but I managed to get it done.", completed: true)
Task.create(student_id:3, supervisor_id:1, title: "This is the sixth task", description: "Carry out task six successfully", solution: "I carried out the sixth task.", comment: "This was challenging, but I managed to get it done.", completed: false)






