const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');



app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        url: req.url
    });
});

app.get('/about-me', (req, res) => {
    res.render('about-me', {
        url: req.url
    });
});

app.get('/contact-me', (req, res) => {
    res.render('contact-me', {
        url: req.url
    });
});

app.listen(port, () => {
    console.log(`listening in port ${ port }`);
});