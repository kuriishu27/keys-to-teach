var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    passport = require('passport'),
    User = require('../models/users'),
    Key = require('../models/keys'),
    middleware = require('../middleware'),
    router = express.Router({mergeParams: true});

// SHOW login form
router.get('/login', function(req, res) {
    res.render('login', {message: req.flash('error')});
});

// handle login logic
router.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }), function(req, res) {
});

// LOGOUT ROUTE
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/');
});

router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/contact', function(req, res, next) {
    res.render('contact')
});

router.get('/about', function(req, res, next) {
    res.render('about')
});

router.get('/contribute', function(req, res, next) {
    res.render('contribute')
});

router.get('/survey', function(req, res, next) {
    res.render('survey')
});
// router.get("/search", function(req, res) {
//     "use strict";

//     var page = req.query.page ? parseInt(req.query.page) : 0;
//     var query = req.query.query ? req.query.query : "";

//     items.searchItems(query, page, ITEMS_PER_PAGE, function(searchItems) {

//         items.getNumSearchItems(query, function(itemCount) {

//             var numPages = 0;
            
//             if (itemCount > ITEMS_PER_PAGE) {
//                 numPages = Math.ceil(itemCount / ITEMS_PER_PAGE);
//             }
            
//             res.render('search', { queryString: query,
//                                     itemCount: itemCount,
//                                     pages: numPages,
//                                     page: page,
//                                     items: searchItems });
            
//         });
//     });
// });

router.get('/addKeys', middleware.isLoggedIn, function(req, res) {
    res.render('addKeys', {message: req.flash('error')});
});

router.post('/addKeys', middleware.isLoggedIn, function(req, res) {
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var description = req.body.description;
    var source = req.body.source;
    var link = req.body.link;
    var tags = req.body.tags;
    var contributor = req.body.contributor;

    var newArticle = {title: title,
        description: description,
        sourceAuthor: source,
        link: link,
        tags: [tags],
        contributor: contributor,
        isPublic: true
    };
    Key.create(newArticle, function(err, newArticle){
        if (err){
            console.log(err); 
        } else {
            res.redirect('/keys');
        }
    });
});

router.post('/contribute', function (req, res) {

    // Create a SMTP transport object
    var transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "jmarinagomez@gmail.com",
                pass: process.env.SECRET
            }
        });

    console.log('SMTP Configured');

    // Message object
    var message = {

        // sender info
        from: 'Keys to Teach',

        // Comma separated list of recipients
        to: ['marina.g16@edu.trinitylaban.ac.uk'],

        // Subject of the message
        subject: 'New contribution from Keys to Teach', 

        // plaintext body
        text: 'Title: ' + req.body.title + 'Message: ' + req.body.message + '\n' + 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + 'Checked name: ' + req.body.namecheckbox,

        // HTML body
        html:'Title: ' + req.body.title + 'Message: ' + req.body.message + '\n' + 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + 'Checked name: ' + req.body.namecheckbox,
    
    };

    transport.sendMail(message, function(error){

    if(error){
        console.log(error);
            req.flash('error', error);
            res.redirect('/');
        return;
    }
        req.flash('success', 'Thank you for contributing and making "Keys to Teach" grow.');
        res.redirect('/');

    });
            
});

router.get('/keys', function(req, res) {
    Key.find({}, function(err, allKeys){
        if(err){
            console.log(err);
        } else {
            res.render('keys/index', {
                keys: allKeys
            });
        }
    });
});

module.exports = router;