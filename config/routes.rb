Rails.application.routes.draw do
  resources :vehicles

  get 'maps'  => 'maps#index'
end
