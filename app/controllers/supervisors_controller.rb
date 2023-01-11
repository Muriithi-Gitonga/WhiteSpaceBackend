class SupervisorsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_credentials
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index 
      supervisors = Supervisor.all
      render json: supervisors
    end
    def show
      supervisor = Supervisor.find(params[:id])
      render json:Supervisor
    end

    def create
      supervisor = Supervisor.create!(supervisor_params)
      render json: dev, status: :created
    end


    private

    def record_not_found
      render json: {error:"supervisr not found"}, status: :not_found
    end

    def supervisor_params
        params.permit(:username,:email,:name,:password,:password_confirmation)
    end
    
    def invalid_credentials invalid
        render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
