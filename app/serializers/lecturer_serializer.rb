class LecturerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :institution, :students
end
