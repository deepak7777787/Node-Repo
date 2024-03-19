const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// registen view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000); 

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// middelware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const events = [
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
        {title: 'mongodb tutorial', snippet: 'super buddy. this is an event scheduling site'},
    ];
    res.render('index', { title: 'Home', events });
}); 

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

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
