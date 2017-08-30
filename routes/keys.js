var express = require('express');
var router = express.Router({mergeParams: true});
var Key = require('../models/keys');
var middleware = require('../middleware');

router.get('/', function(req, res) {

    var allTags = [];

    Key.find({}, function(err, allKeys){
        if(err){
            console.log(err);
        } else {
            console.log("tags here!!");
            console.log(req.allTags);
            res.render('keys/index', {
                keys: allKeys,
                allTags: app.locals.allTags
            });
        }
    });
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

router.get('/:id', function(req, res) {
    Key.findById(req.params.id).populate('comments').exec(function(err, foundKey) {
        if(err){
            console.log(err);
        } else {
            res.render('keys/show', {keys: foundKey});
        }
    });
});

router.get('/:id/edit', middleware.isLoggedIn, function(req, res) {
    Key.findById(req.params.id, function(err, foundKey) {
        res.render('keys/edit', {key: foundKey});
    });
});

router.put('/:id', middleware.isLoggedIn, function(req, res){
    Key.findByIdAndUpdate(req.params.id, req.body.key, function(err, foundKey){
        if(err){
            res.redirect('/keys');
        } else {
            res.redirect('/keys/' + req.params.id);
        }
    });
});

router.delete('/:id', middleware.isLoggedIn, function(req, res){
    Key.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect('/keys');
        } else {
            res.redirect('/keys');
        }
    });
});



module.exports = router;