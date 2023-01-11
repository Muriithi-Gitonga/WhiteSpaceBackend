Rails.application.routes.draw do
<<<<<<< HEAD
  resources :supervisors
  resources :lecturers
  

  post "/login", to: "supervisors#login"
  post "/signup", to: "supervisors#create"
  
=======
  resources :lecturers
>>>>>>> main
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # get 'profiles', to: 'profiles#index'
  # get '/profile/:id', to: 'profiles#show'

  resources :profiles, only: [:index, :show]
end
