class CreateLecturers < ActiveRecord::Migration[7.0]
  def change
    create_table :lecturers do |t|
      t.text :name
      t.string :email
      t.text :institution
      t.text :password_digest

      t.timestamps
    end
  end
end
