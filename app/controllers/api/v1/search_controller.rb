module Api::V1
  class SearchController < ApplicationController

    def index
      vehicles = Vehicle.all
      render json: vehicles, status: :ok
    end

  end
end
