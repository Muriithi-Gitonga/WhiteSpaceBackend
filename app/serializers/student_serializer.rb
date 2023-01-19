class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :course, :start_date, :end_date, :department, :email, :username, :institution, :supervisor, :tasks, :lecturer
end
