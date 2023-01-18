class LecturersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only:[:login, :create, :index]


    # def create
    #     lecturer = Lecturer.create!(lecturer_params)
    #     render json: lecturer, status: :created
    # end
    def create
        lecturer = Lecturer.create!(lecturer_params)
        
        token = encode_token({user_id: lecturer.id})
        render json: {lecturer: lecturer, token: token}, status: :created
        
    end
  


    def index
        lecturer = Lecturer.all
        render json: lecturer
    end

    def show
        lecturer = Lecturer.find(params[:id])
        render json: lecturer
      end
    #register
   



    def login
        lecturer = Lecturer.find_by(email:params[:email])
        if lecturer &.lecturer (params[:password])
          token =  encode_token(lecturer_id:lecturer.id)
          render json: {lecturer:lecturer, token:token}
        else
          render json: {error: "invalid email or password"}
        end
    end
end
private
    def lecturer_params
        params.permit(:name, :email, :institution)
    end

    def authorize
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    def invalid_credentials invalid
        render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    # def record_invalid invalid
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end
end
