# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Word.create(word: "Kiley", phonetic: "K-hi-lee", meaning: "very tired", user_id: 1)
Word.create(word: "voluminous", phonetic: "/vəˈl(j)umənəs/", meaning: "(of writing) very lengthy and full.", user_id: 1)
Word.create(word: "exhaustion", phonetic: "/ɪɡˈzɔstʃ(ə)n/", meaning: "A state of extreme physical or mental fatigue.", user_id: 1)
Word.create(word: "overwhelm", phonetic: "/ˌoʊvərˈ(h)wɛlm/", meaning: "Bury or drown beneath a huge mass.", user_id: 1)
Word.create(word: "hopeful", phonetic: "/ˈhoʊpfəl/", meaning: "Feeling or inspiring optimism about a future event.", user_id: 1)
Word.create(word: "inspired", phonetic: "/inˈspī(ə)rd/", meaning: "(of air or another substance) that is breathed in.", user_id: 1)
Word.create(word: "fortunate", phonetic: "/ˈfôrCH(ə)nət/", meaning: "Favored by or involving good luck or fortune; lucky.", user_id: 1)

User.create(word_card: "test")
