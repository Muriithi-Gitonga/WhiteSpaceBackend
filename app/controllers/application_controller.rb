class ApplicationController < ActionController::API
  before_action :authorize
  def encode_token(payload)
    JWT.encode(payload,"my_secret")
  end
  
  def decode_token
    header = request.headers["authorization"]
    if header
      token = header.split(' ')[1]
      begin
        decoded_token = JWT.decode(token, "my_secret", true, algorithm:('HS256'))
      rescue JWT::DecodeError
        nil
      end
    end
  end
  def valid_supervisor
    decoded_token = decode_token
    if decoded_token
      supervisor_id= decoded_token[0]['supervisor_id']
      supervisor = Supervisor.find_by(id: supervisor_id)
    end
  end
  def logged_in?
    !! valid_supervisor
  end

  def authorize
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
