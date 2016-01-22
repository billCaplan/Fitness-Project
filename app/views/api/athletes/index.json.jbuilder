json.array!(@athletes) do |athlete|
  json.id athlete.id
  json.first_name athlete.first_name
  json.last_name athlete.last_name
  json.sport athlete.sport

  json.created_at athlete.created_at
end
