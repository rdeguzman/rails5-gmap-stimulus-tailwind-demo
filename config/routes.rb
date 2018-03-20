Rails.application.routes.draw do
  resources :vehicles

  get 'maps'  => 'maps#index'
  get 'maps/demo_filtering'  => 'maps#demo_filtering'
end
