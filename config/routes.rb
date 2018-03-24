Rails.application.routes.draw do
  get 'maps/demo_basic'  => 'maps#demo_basic'
  get 'maps/demo_filtering'  => 'maps#demo_filtering'

  namespace :api do
    namespace :v1 do
      get 'search' => 'search#index'
    end
  end

  root to: 'maps#demo_basic'
end
