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

router.get("/search", function(req, res) {
    "use strict";

    var query = req.query.query ? req.query.query : "";

    var searchItems = function(query, callback) {

        var keys = [];

        var cursor = Key
            .find({ $text: { $search: query } })
            .sort({"title" : 1 }).stream()
            .on('data', function(doc){
                keys.push(doc);
            })
            .on('error', function(err){
                assert.equal(err, null);
            })
            .on('end', function(){
                callback(res.render('search', { 
                query: query,
                keys: keys }));
            });


    }

});

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
        tags: tags.split(', '),
        contributor: contributor,
        isPublic: true
    };
    
    Key.create(newArticle, function(err, newArticle){
        if (err){
            console.log(err); 
        } else {
            console.log(newArticle);
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

router.post('/contact', function (req, res) {

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
        subject: 'New query from Keys to Teach', 

        // plaintext body
        text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email +'Message: ' + req.body.message,

        // HTML body
        html: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email +'Message: ' + req.body.message,
    
    };

    transport.sendMail(message, function(error){

    if(error){
        console.log(error);
            req.flash('error', error);
            res.redirect('/');
        return;
    }
        req.flash('success', 'Thank you, we\'ll get back to you soon');
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