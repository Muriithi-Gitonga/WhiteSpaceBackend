class LecturersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def create
        lecturer = Lecturer.create!(lecturer_params)
        render json: lecturer, status: :created
    end

    def index
        lecturer = Lecturer.all
        render json: lecturer
    end


private
    def lecturer_params
        params.permit(:name, :email, :institution)
    end
end