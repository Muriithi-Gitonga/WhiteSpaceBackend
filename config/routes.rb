Rails.application.routes.draw do
  resources :tasks
  resources :supervisors
  resources :lecturers
  resources :tasks
  resources :students
  post "/login", to: "jwt#create"
  # get "/login", to: "jwt#create"

  post "/signin", to: "students#login"
  post "/register", to: "students#create"
  post "/signup", to: "lecturers#create"

  #get "/lecturers", to: "lecturers#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"


  # get 'profiles', to: 'profiles#index'
  # get '/profile/:id', to: 'profiles#show'

  # resources :profiles, only: [:index, :show]


end
