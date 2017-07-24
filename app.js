var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash')

mongoose.connect('mongodb://kuriishu27:KeystoteacH277@ds147537.mlab.com:47537/keys-to-teach');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('express-session')({
    secret: 'Apos by accent',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

var indexRoutes = require('./routes/index')
app.use('/', indexRoutes);

var PORT = 8080;
app.listen(PORT, process.env.IP, function() {
    console.log('Keys to Learn server started');
})