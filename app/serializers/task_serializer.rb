class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :solution, :comment, :student_id, :supervisor_id, :completed 
end
