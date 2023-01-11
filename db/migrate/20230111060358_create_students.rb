class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.integer :supervisor_id
      t.string :name
      t.string :username
      t.integer :lecturer_id
      t.string :course
      t.date :start_date
      t.date :end_date
      t.string :department
      t.string :email
      t.string :password_digest
      t.string :institution
      t.string :lecturer_email

      t.timestamps
    end
  end
end
