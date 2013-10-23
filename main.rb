require 'sinatra'
require 'json'

get '/' do
  # form to subscription
  @url_action = "http://hello.freeluna.it/create"
  #@url_action = "/debug"
  erb :index
end

### solo per testare in locale la risposta json
get '/debug' do
  #require 'debugger'; debugger
  @params = params
  @params[:status] = "ok"
  @params[:errors] = nil
  # @params[:status] = "ko"
  # @params[:errors] = {
  #   :username => {
  #     :param => "username",
  #     :msg => "Username non valido",
  #     :value => "_test"
  #   }
  # }
  #erb :debug
  content_type :json
  @params.to_json
end