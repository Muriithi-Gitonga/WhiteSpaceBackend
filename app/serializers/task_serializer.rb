class TaskSerializer < ActiveModel::Serializer
  attributes :id, :tile, :description, :solution, :comment, :student_id, :supervisor_id, :completed, :student_username
end
