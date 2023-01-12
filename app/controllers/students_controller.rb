class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_found

    def index
        render json: Student.all
    end

    def create
        student = Student.create!(student_params)

        render json: student, status: :created
    end

    def login
        student = Student.find_by(params[:username])
        #User#authenticate comes from BCrypt
        if student && student.authenticate(params[:password])
          # encode token comes from ApplicationController
          token = encode_token( student_id: student.id )
          render json: {student:student, token:token}, status: :accepted
        else
          render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end





    

    private

    def record_not_found
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def student_params
         params.permit(:id, :name, :course, :start_date, :end_date, :department, :email, :username, :institution, :supervisor)
    end


end
