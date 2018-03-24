Rails.application.routes.draw do
  get 'maps/demo_basic'  => 'maps#demo_basic'
  get 'maps/demo_filtering'  => 'maps#demo_filtering'

  root to: 'maps#demo_basic'
end
