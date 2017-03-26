'use strict';
var chai = require('chai');
var expect = chai.expect;
var ImdbDataHelper = require('../imdb_data_helper');

describe('ImdbDataHelper', function () {
    var subject = new ImdbDataHelper();

    describe('#formatMovie', function () {
        const movie = {
            title: 'Boardwalk Empire',
            _year_data: '2010–2014',
            rated: 'TV-MA',
            released: '2010-09-18T22:00:00.000Z',
            runtime: '55 min',
            genres: 'Crime, Drama, History',
            director: 'N/A',
            writer: 'Terence Winter',
            actors: 'Steve Buscemi, Kelly Macdonald, Michael Shannon, Shea Whigham',
            plot: 'Set in the Prohibition era of the 1920s Boardwalk Empire is the story of Enoch "Nucky" Thompson, the treasurer of Atlantic County, Atlantic City, New Jersey. Due to his relationships with mobsters as well as political contacts, the Federal Government start to take an interest in him. His lavish lifestyle seems at odds with his position, and as well as his connections, there is prolific bootlegging in the area.',
            languages: 'English',
            country: 'USA',
            awards: 'Won 2 Golden Globes. Another 59 wins & 173 nominations.',
            poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjNhODE1M2YtMjFmMC00YTliLThhNDktMzI0MjljMzI3NDVjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
            metascore: 'N/A',
            rating: '8.6',
            votes: '142,097',
            imdbid: 'tt0979432',
            type: 'series',
            totalseasons: 5,
            response: 'True',
            series: true,
            imdburl: 'https://www.imdb.com/title/tt0979432',
            _episodes: [],
            start_year: 2010,
            end_year: null
        };
        context('with a status containing no delay', function () {
            it('formats the status as expected', function () {
                expect(subject.formatMovie(movie)).to.eq('Der Film Boardwalk Empire hat eine Bewertung von 8,6 Sternen auf IMDB');
            });
        });

    });

});