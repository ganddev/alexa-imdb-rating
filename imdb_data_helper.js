'use strict';
const _ = require('lodash');
const Imdb = require('imdb-api');

function ImdbDataHelper() {
}

ImdbDataHelper.prototype.getMovieByName = function(movieName) {
    return Imdb.getReq({ name: movieName });
}

ImdbDataHelper.prototype.formatMovie = function(movie) {
    var template = _.template('Der Film ${name} ' +
      'hat eine Bewertung von ${rating} Sternen auf IMDB');
    return template({
      rating: movie.rating,
      name: movie.title
    });
}

module.exports = ImdbDataHelper;
