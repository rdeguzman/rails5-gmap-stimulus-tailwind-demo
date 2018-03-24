require 'rails_helper'

RSpec.describe VehicleSerializer do
  let(:available_attributes) do
    [
      :id,
      :vehicle_name,
      :lat,
      :lng
    ]
  end

  let!(:vehicle) do
    create(:vehicle,
      year: 2008,
      make: "Mazda",
      model: "RX-8",
      lat: Faker::Address.latitude.to_f,
      lng: Faker::Address.longitude.to_f)
  end

  subject { VehicleSerializer.new(vehicle) }

  describe 'attributes' do
    it { expect(subject.attributes.keys).to eql(available_attributes) }
    it { expect(subject.attributes[:id]).to be_a(Integer) }
    it { expect(subject.attributes[:vehicle_name]).to be_a(String) }
    it { expect(subject.attributes[:lat]).to be_a(Float) }
    it { expect(subject.attributes[:lng]).to be_a(Float) }
  end
end
