class StudentsController < ApplicationController
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    
    wrap_parameters format: [:json]

    def index
        render json: Student.all
    end

   

    # register
    def create
        student = Student.create!(student_params)
        token = encode_token({user_id: student.id})
        
        render json: {student: student, token: token}, status: :created
     
    end

    def show
        student = Student.find(params[:id])
        render json: student

    end

    def destroy
        student = Student.find(params[:id])
        student.destroy
        render json: student
    end

    

    

    private

    def record_invalid invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def student_params
         params.permit(:id, :name, :course, :start_date, :end_date, :department, :email, :username, :institution, :password, :lecturer_id, :supervisor_id)
    end


end
