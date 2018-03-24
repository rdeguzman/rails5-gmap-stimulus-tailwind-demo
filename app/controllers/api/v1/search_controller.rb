module Api::V1
  class SearchController < ApplicationController

    def index
      vehicles = Vehicle.all
      render json: vehicles.to_json, status: :ok
    end

  end
end
