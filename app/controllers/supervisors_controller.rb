class SupervisorsController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]
  # rescue_from ActiveRecord::RecordInvalid, with: :invalid_credentials
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_credentials

  
  def index 
    # supervisors = Supervisor.all
    render json: valid_user
  end

  def show
    supervisor = Supervisor.find(params[:id])
    render json: supervisor
  end

  # register
  def create
    supervisor = Supervisor.create!(supervisor_params)
    
    token = encode_token({user_id: supervisor.id})
    
    render json: {supervisor: supervisor, token: token}, status: :created
  end

  

  # def login
  #   supervisor = Supervisor.find_by(email:params[:email])
  #   if supervisor &.authenticate (params[:password])
  #     token =  encode_token(supervisor_id:supervisor.id)
  #     render json: {supervisor:supervisor, token:token}
  #   else
  #     render json: {error: "invalid email or password"}
  #   end
  # end


  private

  def record_not_found
    render json: {error:"supervisor not found"}, status: :not_found
  end


  def supervisor_params
      params.permit(:username,:email,:name,:password)
  end
  
  def invalid_credentials invalid
      render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
