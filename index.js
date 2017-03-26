'use strict';

const Alexa = require("alexa-app");
const ImdbDataHelper = require('./imdb_data_helper');

var skillService = new Alexa.app("movie-ratings");
const imdbHelper = new ImdbDataHelper();
imdbHelper.getMovieByName('The Silence of the Lambs').then(function(movie) {
        console.log(movie);
 }).catch(function (err) {
  console.log('handled the error', err);
});;

skillService.launch(function(request, response) {
  var prompt = 'Willkommen bei Movie Ratings.' +
    'Nenne mir einen Film oder eine Serie und ich sage dir das IMDB Rating.';
  response.say(prompt).shouldEndSession(false);
});

skillService.intent("getMovieRating", function(request, response) {
    imdbHelper.getMovieByName('Boardwalk Empire').then(function(movie) {
        console.log(imdbHelper.formatMovie(movie));
    });    
});

skillService.intent('AMAZON.HelpIntent', {},
  function(request, response) {
    var help = 'Willkommen bei Movie Ratings.' +
    'Nenne mir einen Film oder eine Serie und ich sage dir das IMDB Rating.';
    response.say(help).shouldEndSession(false);
 });

skillService.intent('AMAZON.CancelIntent', {}, cancelIntentFunction);
skillService.intent('AMAZON.StopIntent', {}, cancelIntentFunction);

var cancelIntentFunction = function(req, res) {
  res.say('Auf Wiedersehen!').shouldEndSession(true);
};


module.exports = skillService;