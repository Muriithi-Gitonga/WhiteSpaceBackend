class Student < ApplicationRecord
    belongs_to :lecturer
    has_many :tasks
    belongs_to :supervisor
    has_secure_password
end
