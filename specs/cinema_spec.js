const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    assert.deepStrictEqual(cinema.list_of_film_titles(films), ['Moonlight', 'Blade Runner 2049', 'Dunkirk','Black Panther','T2 Trainspotting'])
  });
  it('should be able to find a film by title', function(){
    assert.deepStrictEqual(cinema.find_film_by_title(moonlight), moonlight )
  });
  it('should be able to filter films by genre', function(){
    assert.deepStrictEqual(cinema.filter_by_genre(moonlight), [moonlight,trainspotting])
  });
  it('should be able to check whether there are some films from a particular year', function(){
    assert.deepStrictEqual(cinema.filter_by_year(2017), [bladeRunner, dunkirk, trainspotting])
  });
  it('should be able to check whether there are no films from a particular year', function(){
    assert.deepStrictEqual(cinema.filter_by_year(2019), [])
  });
  it('should be able to check whether all films are over a particular length', function(){
    assert.deepStrictEqual(cinema.films_length_over_particular_length(96), [moonlight, bladeRunner, blackPanther, trainspotting]);
  });
  it('should be able to calculate total running time of all films', function(){
    assert.strictEqual(cinema.calculate_total_film_running_time(), 251)
  });

});
