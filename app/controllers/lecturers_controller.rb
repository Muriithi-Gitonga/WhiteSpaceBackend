class LecturersController < ApplicationController
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  

    def index
        lecturer = Lecturer.all
        render json: lecturer
    end

    def show
        lecturer = Lecturer.find(params[:id])
        render json: lecturer

    end
 

    #register
    def create
        lecturer = Lecturer.create!(lecturer_params)
        
        token = encode_token({user_id: lecturer.id})
        render json: {lecturer: lecturer, token: token}, status: :created
        
    end



private
    def lecturer_params
        params.permit(:name, :email, :institution)
    end

    def record_invalid invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end