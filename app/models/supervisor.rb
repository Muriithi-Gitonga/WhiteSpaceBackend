class Supervisor < ApplicationRecord
  has_many :tasks
  has_one :profile
  has_many :students

end
# get jira commit message