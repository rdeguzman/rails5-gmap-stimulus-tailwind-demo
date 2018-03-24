class VehicleSerializer < ActiveModel::Serializer
  attributes :id,
             :vehicle_name,
             :lat,
             :lng

  def vehicle_name
    "#{object.year} #{object.make} #{object.model}"
  end

end
