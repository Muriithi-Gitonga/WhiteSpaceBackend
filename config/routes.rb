Rails.application.routes.draw do
  resources :students


  post "/login", to: "supervisors#login"
  post "/signup", to: "supervisors#create"
end
