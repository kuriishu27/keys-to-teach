var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash')

var url = process.env.DATABASEURL || 'http://localhost/keys-to-teach'

mongoose.connect(url);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('express-session')({
    secret: 'Keys to teach session',
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
app.listen(process.env.PORT || PORT, process.env.IP, function() {
    console.log('Keys to Learn server started');
})