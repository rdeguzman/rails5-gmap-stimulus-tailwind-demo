class VehicleSerializer < ActiveModel::Serializer
  attributes :id,
             :vehicle_name,
             :lat,
             :lng,
             :img,
             :available,
             :transmission,
             :positive_review_count,
             :negative_review_count,
             :total_trips,

  def vehicle_name
    "#{object.year} #{object.make} #{object.model}"
  end

end
