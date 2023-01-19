class JwtController < ApplicationController
    skip_before_action :authorize
    wrap_parameters format: [:json]
    
    def profile
        render json: { user: valid_user }, status: :accepted
    end

    # def profile
    # token = request.headers["Authenticate"]
    # u
    # end

    def create
        user = if request.headers['Role'] === 'supervisor'
            Supervisor.find_by(email: params[:email])
            elsif request.headers['Role'] === 'lecturer'
                Lecturer.find_by(email: params[:email])
            elsif request.headers['Role'] === 'student'
                Student.find_by(email: params[:email])
            end
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})  
            render json: { token: token, user: request.headers['Role'] == 'supervisor'? SupervisorSerializer.new(user) :  request.headers['Role'] == 'student'? StudentSerializer.new(user) : request.headers['Role'] == 'lecturer'? LecturerSerializer.new(user) : nil } 
        else
            render json: { error: 'Invalid email, password or role'}, status: :not_found
        end



    end

end