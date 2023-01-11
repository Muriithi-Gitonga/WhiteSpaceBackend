class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_found

    def index
        render json: Student.all
    end

    def create
        student = Student.create!(student_params)

        return json: student
    end


    

    private

    def record_not_found
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def student_params
         params.permit(:id, :name, :course, :start_date, :end_date, :department, :email, :username, :institution, :supervisor)
    end


end
