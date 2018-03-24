class Vehicle < ApplicationRecord
  validates :year, numericality: { greater_than_or_equal_to: 2006 }
  validates :make, :model, presence: true
end
