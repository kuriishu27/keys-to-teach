var express = require('express');
var router = express.Router({mergeParams: true});
var Key = require('../models/keys');
var Comment = require('../models/comments');
var middleware = require('../middleware');

// Comments new
router.get('/new', function(req, res){
    // find Key by id
    Key.findById(req.params.id, function(err, Key){
        if (err){
            console.log(err);
        } else {
            res.render('comments/new', {Key: Key});
        }
    });
});

// Comment post
router.post('/', function(req, res){
    // lookup Key using ID
    Key.findById(req.params.id, function(err, Key){
        if(err){
            req.flash('error', 'Something went wrong');
            console.log(err);
            res.redirect('/keys');
        } else {
            console.log(req.body.comment);
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log('There is an error');

                    console.log(err);
                } else {
                    // username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // save comment
                    comment.save();
                    Key.comments.push(comment);
                    Key.save();
                    req.flash('success', 'Successfully added comment! ^_^');
                    res.redirect('/keys/' + Key._id);
                }
            });
        }
    });
});

// EDIT route
router.get('/:comment_id/edit', function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err) {
            res.redirect('back');
        } else {
            res.render('comments/edit', {campground_id: req.params.id, comment: foundComment});
        }
    });
});

router.put('/:comment_id', function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/keys/' + req.params.id );
        }
    });
});

// DESTROY COMMENT ROUTE
router.delete('/:comment_id', function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if (err){
            req.flash('error', 'Something bad happened');
            res.redirect('back');
        } else {
            req.flash('success', 'Comment deleted');
            res.redirect('/keys/' + req.params.id);
        }
    });
});


module.exports = router;