class SupervisorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :students
  has_many :lecturers
  has_many :tasks
end
