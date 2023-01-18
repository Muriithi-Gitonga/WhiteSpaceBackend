class JwtController < ApplicationController
    skip_before_action :authorize
    
    def profile
        render json: { user: valid_user }, status: :accepted
    end

    # def profile
    # token = request.headers["Authenticate"]
    # u
    # end

    def create
        user = if request.headers['role'] === 'supervisor'
            Supervisor.find_by(name: params[:username])
            elsif request.headers['role'] === 'lecturer'
                Lecturer.find_by(name: params[:username])
            else
                Student.find_by(name: params[:username])
            end
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            render json: { token: token, user: user}
        end



    end

end