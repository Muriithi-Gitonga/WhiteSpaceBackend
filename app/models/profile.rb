class Profile < ApplicationRecord
    belongs_to :student

    def owner
        "supervisor no #{self.supervisor_id}: student no #{self.student_id}"
    end
end