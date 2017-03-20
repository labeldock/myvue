class CreateModels < ActiveRecord::Migration[5.0]
  def change
    create_table :models do |t|
      t.string :table
      t.string :title
      t.text :head
      t.text :data
      t.references :parent, foreign_key: true

      t.timestamps
    end
  end
end
