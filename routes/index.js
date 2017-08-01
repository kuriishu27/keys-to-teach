var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    router = express.Router({mergeParams: true})

router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/posture', function(req, res, next) {
    res.render('posture')
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

    console.log('Sending Mail');
    transport.sendMail(message, function(error){
    if(error){
        console.log(error);
            req.flash('error', error);
            res.redirect('/');
        return;
    }
        console.log('Message sent!');
            req.flash('success', 'Thank you for your contribution');
            res.redirect('/');

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
    });
            
});

module.exports = router;