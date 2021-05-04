Rails.application.routes.draw do
  resources :todos
  get 'search', to: 'todos#search'
end
