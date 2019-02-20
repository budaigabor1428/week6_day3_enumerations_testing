const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.list_of_film_titles = function(films){
  const titles = this.films.map((film) => film.title);
  return titles;
};

Cinema.prototype.find_film_by_title = function(film){
  const title = this.films.find((item) => item.title === film.title);
  return title;
};

Cinema.prototype.filter_by_genre = function(film){
  const genre = this.films.filter((item) => item.genre === film.genre);
  return genre;
};

Cinema.prototype.filter_by_year = function(year){
  const filmYear = this.films.filter((item) => item.year === year);
  return filmYear;
};



Cinema.prototype.films_length_over_particular_length = function(length){
  const filmLength = this.films.filter((item) => item.length > length);
  return filmLength;
};


Cinema.prototype.calculate_total_film_running_time = function(){
  const length = this.films.reduce((total, item) => total + item.length, 0);
  return length;
};
