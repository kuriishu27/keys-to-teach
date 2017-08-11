var express = require('express');
var router = express.Router({mergeParams: true});
var Key = require('../models/keys');
var middleware = require('../middleware');

router.get('/', function(req, res) {
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

router.get('/:id/edit', function(req, res) {
    Key.findById(req.params.id, function(err, foundKey) {
        res.render('keys/edit', {campground: foundKey});
    });
});

router.delete('/', function(req, res) {


});

router.get('/:id', function(req, res) {
    Key.findById(req.params.id, function(err, foundKey) {
        res.render('keys/show', {keys: foundKey});
    });
});

module.exports = router;