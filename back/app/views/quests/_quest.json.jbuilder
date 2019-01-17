json.extract! quest, :id, :question, :options, :answer_idx, :created_at, :updated_at
json.url quest_url(quest, format: :json)
