class Model < ApplicationRecord
  belongs_to :parent, class_name: 'Model', required: false
  has_many :models, foreign_key: :parent_id
end
