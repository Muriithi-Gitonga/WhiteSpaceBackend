class Student < ApplicationRecord
    belongs_to :lecturer
    # has_one :profile
    has_many :tasks
    belongs_to :supervisor
    has_secure_password


    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
