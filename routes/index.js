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
router.post('/login', function(req, res) {
    passport.authenticate('local')(req, res, function() {
        req.flash('success', 'Welcome to Keys to Teach ' + req.user.username);
        res.redirect('/');
        });
});

// LOGOUT ROUTE
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/');
});

router.get('/', function(req, res, next) {

    // TO-DO: Implement autocomplete
    var allTags = [];

    Key.aggregate([{ $project: { tags : 1}}, 
        
        {$group: {_id: null, tags:  { "$addToSet" : "$tags" } } }, 
        {$unwind: "$tags"}, 
        {$unwind: "$tags"}, 
        {$project: {"_id": 0, "tags": "$tags"}}, 
        {$group: {_id: null, allTags: {$addToSet: "$tags"}}} 

    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            allTags = result[0].allTags;
            console.log(res.locals);
            app.locals.allTags = allTags;
            console.log(app.locals.allTags.length);
            res.render('index', {
                allTags: app.locals.allTags
            });
        }
    });

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

        var numItems = 0;
        
        var cursor2 = Key.aggregate([
            { $match: {$text: { $search: query } } }, 
            { $group: {_id: null, num: {$sum: 1}}}
        ], function (err, result) {
            if (err) {
                next(err);
            } else {
                if (result.length > 0) {
                    numItems = result[0].num                    
                } else {
                    numItems = 0
                }

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
                    keys: keys,
                    numItems: numItems }));
                });
            }
        });
    }

    searchItems(query, function() {
        
    });

});

router.get('/addKeys', middleware.isLoggedIn, function(req, res) {
    res.render('addKeys', {message: req.flash('error')});
});

router.get('/terms', function(req, res) {
    res.render('terms');
});

router.get('/privacyAndPolicy', function(req, res) {
    res.render('privacy');
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
    Key.find({}, {}, { sort: {_id: 1} }, function(err, allKeys){
        if(err){
            console.log(err);
        } else {
            res.render('keys/index', {
                keys: allKeys,
                allTags: app.locals.allTags
            });
        }
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/');
});

module.exports = router;