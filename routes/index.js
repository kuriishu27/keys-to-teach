var express = require('express'),
    app = express(),
    router = express.Router({mergeParams: true})


router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/posture', function(req, res, next) {
    res.render('posture')
});

module.exports = router;