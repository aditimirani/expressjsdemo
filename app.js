var express = require('express');
var hbs = require('express-handlebars')
var express = require('express');
var router = express.Router();
var path = require('path');
var routes = require('./routes')
var app = express();
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: __dirname + '/views/layouts /',
    partialsPath: 'views/partials'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'hbs');

//Routes
//default route to home page
app.get('/', routes.home);
//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);
app.listen('3000', function() {
    console.log("application in running on port==3000");
});
