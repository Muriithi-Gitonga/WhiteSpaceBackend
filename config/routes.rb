Rails.application.routes.draw do
  resources :students


  post "/login", to: "students#login"
  post "/signup", to: "students#create"
end
