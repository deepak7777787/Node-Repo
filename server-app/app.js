const express = require('express');

// express app
const app = express();

// registen view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000); 

app.get('/', (req, res) => {
    const events = [
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
    ];
    res.render('index', { title: 'Home', events });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/events/create', (req, res) => {
    res.render('create', { title: 'Create a new Event' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
