class CreateModels < ActiveRecord::Migration[5.0]
  def change
    create_table :models do |t|
      t.string :table
      t.string :tab
      t.string :alt
      t.text :data
      t.references :parent, foreign_key: true

      t.timestamps
    end
  end
end
