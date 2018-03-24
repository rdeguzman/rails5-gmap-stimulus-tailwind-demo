require 'json'

def parse_vehicle(value)
  pattern = /20\d\d/
  clean_str = value.gsub("'s","")
  raw_array = clean_str.split(pattern)
  year_index = clean_str.index(pattern)
  year = clean_str[year_index,4]

  vehicle_type_array = raw_array.last.strip.split(" ")
  make = "#{vehicle_type_array[0]}"
  model = value.split(make).last.strip

  puts "year: #{year} make: #{make} model: #{model}"
  return year,make,model
end

namespace :seed do

  desc "Seed json_array from json"
  # desc rake seed:json_array file=sample_data.json" 
  # bundle exec rake seed:json_array file="public/sample_data.json" --trace
  task :vehicles => [:environment] do
    filename = ENV['file']

    file = File.read(filename)
    json_array = JSON.parse(file, { symbolize_names: true })
    puts "Length: #{json_array.length}"

    json_array.each do |obj|
      puts obj
      year,make,model = parse_vehicle(obj[:vehicle_name])

      v = Vehicle.new
      v.lat = obj[:lat].to_f
      v.lng = obj[:lng].to_f
      v.year = year
      v.make = make
      v.model = model
      v.img = obj[:img]
      v.available = obj[:available]
      v.transmission = obj[:transmission]
      v.body_type = obj[:body_type]
      v.positive_review_count = obj[:positive_review_count]
      v.negative_review_count = obj[:negative_review_count]
      v.total_trips = obj[:total_trips]
      v.save
    end

  end
end
