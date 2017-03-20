class CreateModels < ActiveRecord::Migration[5.0]
  def change
    create_table :models do |t|
      t.string :table
      t.string :title
      t.text :model

      t.timestamps
    end
  end
end
