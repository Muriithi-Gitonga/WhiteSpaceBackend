class Profile < ApplicationRecord

    def owner
        "#{self.supervisor_id}: $#{self.student_id}"
      end
