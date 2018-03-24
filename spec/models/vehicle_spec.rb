require "rails_helper"

RSpec.describe Vehicle, type: :model do
  let(:vehicle) { described_class.new(year: 2009, make: "Mazda", model: 3) }

  it "is valid with valid attributes" do
    expect(vehicle).to be_valid
  end

  it "is not valid without a make" do
    vehicle.make = nil
    expect(vehicle).to_not be_valid
  end

  it "is not valid without a model" do
    vehicle.model = nil
    expect(vehicle).to_not be_valid
  end


  context 'validate year' do
    it "is not valid without year" do
      vehicle.year = nil
      expect(vehicle).to_not be_valid
    end

    it "is not valid if the vehicle < 2006 for OBD canbus support" do
      vehicle.year = "abc"
      expect(vehicle).to_not be_valid

      vehicle.year = 2000
      expect(vehicle).to_not be_valid
    end

  end

end
