class Supervisor < ApplicationRecord
  has_secure_password
  has_many :tasks
  has_one :profile
  has_many :students

  # validates :password, presence: true, confirmation: true, length: { minimum: 8 }, password_validation: true

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 8 }
  validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

end
# get jira commit message