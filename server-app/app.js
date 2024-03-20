const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Event = require('./models/event');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://buddy:buddyPswd@cluster0.yrfjoru.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
    
// registen view engine
app.set('view engine', 'ejs');

// middelware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// // mongoose and mongo sandbox routes
// app.get('/add-event', (req, res) => {
//     const event = new Event({
//         title: 'new event 2',
//         snippet: 'about my new event',
//         body: 'more information about my new event',
//         date: '03/19/2024'
//     });

//     event.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-events', (req, res) => {
//     Event.find() 
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-event', (req, res) => {
//     Event.findById('65fad6e0cc26774ec8a7997d')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

app.get('/', (req, res) => {
    res.redirect('/events');
}); 

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// event routes
app.get('/events', (req, res) => {
    Event.find()
        .then((result) => {
            res.render('index', { title: 'All Events', events: result })
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/events/create', (req, res) => {
    res.render('create', { title: 'Create a new Event' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
