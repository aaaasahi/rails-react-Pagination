30.times do |n|
  Todo.create!(
    title: "タイトル#{n + 1}",
    text: "テキスト#{n + 1}"
  )
end