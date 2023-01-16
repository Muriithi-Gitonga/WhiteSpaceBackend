# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_16_063026) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lecturers", force: :cascade do |t|
    t.text "name"
    t.string "email"
    t.text "institution"
    t.text "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string "bio"
    t.string "username"
    t.bigint "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_profiles_on_student_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.bigint "supervisor_id"
    t.bigint "lecturer_id"
    t.string "course"
    t.date "start_date"
    t.date "end_date"
    t.string "department"
    t.string "email"
    t.string "password_digest"
    t.string "institution"
    t.string "lecturer_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lecturer_id"], name: "index_students_on_lecturer_id"
    t.index ["supervisor_id"], name: "index_students_on_supervisor_id"
  end

  create_table "supervisors", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.bigint "student_id"
    t.bigint "supervisor_id"
    t.text "title"
    t.text "description"
    t.text "solution"
    t.text "comment"
    t.boolean "completed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_tasks_on_student_id"
    t.index ["supervisor_id"], name: "index_tasks_on_supervisor_id"
  end

end
