Rails.application.routes.draw do
  resources :supervisors

  post "/login", to: "supervisors#login"
  post "/signup", to: "supervisors#create"
  get "/supervisors/:id", to: "supervisors#show"
  get "/supervisors", to: "supervisors#index"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
