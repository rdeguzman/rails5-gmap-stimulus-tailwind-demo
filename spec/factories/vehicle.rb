FactoryBot.define do
  factory :vehicle do
    year { Faker::Number.between(2006, 2018) }
    make { Faker::Name.name }
    model { Faker::Name.name }
    lat { Faker::Address.latitude.to_f }
    lng { Faker::Address.longitude.to_f }
    img { Faker::Placeholdit.image }
    available { true }
  end
end
