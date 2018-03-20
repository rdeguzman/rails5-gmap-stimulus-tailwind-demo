class CreateVehicles < ActiveRecord::Migration[5.1]
  def change
    create_table :vehicles do |t|
      t.string :vehicle_name
      t.float :lat
      t.float :lng
      t.boolean :available, default: true
      t.string :transmission
      t.string :body_type
      t.integer :positive_review_count, default: 0
      t.integer :negative_review_count, default: 0
      t.integer :total_trips, default: 0

      t.timestamps
    end
  end
end
