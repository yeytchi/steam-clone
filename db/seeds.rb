# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
require 'json'
require 'open-uri'
require 'nokogiri'

puts 'Deleting previous entries'

Game.destroy_all

puts 'Finding best 50 games names'

best_games = []
best_games_html = open('http://www.businessinsider.fr/us/best-video-games-metacritic-2017-11').read
best_games_search = Nokogiri::HTML(best_games_html)
best_games_search.search('.slide-title-text').each do |element|
  best_games << element.text.split("\"")[1]
end

puts 'Creating Games'

# getting data from API

best_games.last(40).each do |game|
  puts "Creating #{game}"

  api_key = '2f6e5965d88deb5064ec6657f3f15a42c9274e70'
  url = "https://www.giantbomb.com/api/search/?api_key=#{api_key}&format=json&query=#{game}&resources=game"
  game_serialized = open(url).read
  new_game = JSON.parse(game_serialized)

  # new_game['results'][0][]
  Game.create!(
    name: game,
    image_url: new_game['results'][0]['image']['super_url'],
    icon_url: new_game['results'][0]['image']['icon_url'],
    release_date: "#{new_game['results'][0]['expected_release_day']}/#{new_game['results'][0]['expected_release_month']}/#{new_game['results'][0]['expected_release_year']}",
    release_year: new_game['results'][0]['expected_release_year']
  )
end












