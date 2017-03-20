Rails.application.routes.draw do
  get 'vue/index'

  get 'vue/second'

  resources :models do
  end
  get '/table/:table_id', to: 'models#table'
  get '/table', to: 'models#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
