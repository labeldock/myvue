json.extract! model, :id, :table, :title, :head, :data, :parent_id
#json.url model_url(model, format: :json)

begin
json.data JSON.parse(model.data)
rescue
json.data nil
end

begin
json.head JSON.parse(model.head)
rescue
json.head nil
end