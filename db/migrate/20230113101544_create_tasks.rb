class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.text :title
      t.text :description
      t.text :solution
      t.text :comment
      t.belongs_to :student
      t.belongs_to :supervisor
      t.boolean :completed
      t.text :student_username

      t.timestamps
    end
  end
end
