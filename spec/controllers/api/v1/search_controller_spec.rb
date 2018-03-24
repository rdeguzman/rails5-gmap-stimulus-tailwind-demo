require "rails_helper"

RSpec.describe Api::V1::SearchController, type: :controller do

  describe "GET search" do

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
      expect(response.body).to look_like_json
    end

  end
end
