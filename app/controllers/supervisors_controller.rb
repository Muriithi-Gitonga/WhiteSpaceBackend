class SupervisorsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_credentials
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    skip_before_action :authorize, only:[:login, :create]
    def index 
      supervisors = Supervisor.all
      render json: supervisors
    end
    def show
      supervisor = Supervisor.find(params[:id])
      render json: supervisor
    end

    def create
      supervisor = Supervisor.create!(supervisor_params)
      render json: supervisor, status: :created
    end

    def login
      supervisor = Supervisor.find_by(email:params[:email])
      if supervisor &.authenticate (params[:password])
        token =  encode_token(supervisor_id:supervisor.id)
        render json: {supervisor:supervisor, token:token}
      else
        render json: {error: "invalid email or password"}
      end
    end


    private

    def record_not_found
      render json: {error:"supervisor not found"}, status: :not_found
    end
    def authorize
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    def supervisor_params
        params.permit(:username,:email,:name,:password,:password_confirmation)
    end
    
    def invalid_credentials invalid
        render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
