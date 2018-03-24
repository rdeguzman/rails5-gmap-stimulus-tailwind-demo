require 'rails_helper'

RSpec.describe 'Search Result Vehicle API', type: :request do
  let!(:vehicles) { create_list(:vehicle, 5) }

  describe 'GET /api/v1/search' do
    before { get '/api/v1/search' }

    context 'when successful return vehicles' do
      it { expect(json).not_to be_empty }
      it { expect(json.size).to eq(vehicles.length) }
    end
  end
end
