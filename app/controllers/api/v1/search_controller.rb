module Api::V1
  class SearchController < ApplicationController

    def index
      render json: {}, status: :ok
    end

  end
end
