Rails.application.routes.draw do
  resources :lecturers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # get 'profiles', to: 'profiles#index'
  # get '/profile/:id', to: 'profiles#show'

  resources :profiles, only: [:index, :show]
  resources :students


  post "/login", to: "students#login"
  post "/signup", to: "students#create"
end
