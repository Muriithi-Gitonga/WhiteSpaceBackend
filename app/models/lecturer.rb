class Lecturer < ApplicationRecord
    has_secure_password
    validates :name, :email, :institution, presence: true
    has_many :students
    
end
