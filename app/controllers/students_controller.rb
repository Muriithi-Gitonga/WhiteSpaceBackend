class StudentsController < ApplicationController
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        render json: Student.all
    end

   

    # register
    def create
        student = Student.create!(student_params)
        token = encode_token({user_id: student.id})
        
        render json: {lecturer: lecturer, token: token}, status: :created
     
    end

    def show
        student = Student.find(params[:id])
        render json: student

    end

    

    # def login
    #     student = Student.find_by(params[:username])
    #     #User#authenticate comes from BCrypt
    #     if student && student.authenticate(params[:password])
    #       # encode token comes from ApplicationController
    #       token = encode_token( student_id: student.id )
    #       render json: {student:student, token:token}, status: :accepted
    #     else
    #       render json: { message: 'Invalid username or password' }, status: :unauthorized
    #     end
    # end






    

    private

    def record_invalid invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def student_params
         params.permit(:id, :name, :course, :start_date, :end_date, :department, :email, :username, :institution, :supervisor)
    end


end
