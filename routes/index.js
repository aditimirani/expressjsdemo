moviesJson = require('../movies.json')
    //Routes
    //default route to home page

exports.home = function(req, res) {
    var movies = moviesJson.movies;
    res.render('home', {
        title: "Star War Movies",
        movies: movies
    });
};
//movie single
exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    var movies = moviesJson.movies;
    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];
        var title = movies[episode_number - 1].title;
        var main_characters = movie.main_characters;
        res.render('movie_single', {
            title: title,
            movie: movie,
            main_characters: main_characters,
            movies: movies
        })
    } else {
        res.render('notFound', {
            movies: movies,
            title: "this is not the page you are looking for"
        });
    }
};
//not found
exports.notFound = function(req, res) {
    var movies = moviesJson.movies;
    res.render('notFound', {
        movies: movies,
        title: "this is not the page you are looking for"
    });
};
