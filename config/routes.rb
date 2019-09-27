Rails.application.routes.draw do
  devise_for :users
  root to: 'games#index'

  get '/groupe_1', to: 'pages#groupe_1'
  get '/groupe_2', to: 'pages#groupe_2'
  get '/groupe_3', to: 'pages#groupe_3'
  get '/groupe_4', to: 'pages#groupe_4'
  get '/groupe_6', to: 'pages#groupe_6'
  resources :games, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
