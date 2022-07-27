var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/PIDEV_API_db',()=>{
    console.log('connected to database')
})


var indexRouter = require('./routes/index');
var blogueRouter = require('./routes/blogues');
var chienChasseRouter = require('./routes/chienChasse');
var commentaireRouter = require('./routes/commentaire');
var especeChasseRouter = require('./routes/especeChasse');
var localisationChasseRouter = require('./routes/localisationChasse');
var trucAstuceChasseRouter = require('./routes/trucAstuceChasse');
var localisationEspeceRouter = require('./routes/localisation-especes');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/blogues',blogueRouter)
app.use('/chienChasse',chienChasseRouter)
app.use('/commentaire',commentaireRouter)
app.use('/especeChasse',especeChasseRouter)
app.use('/localisationChasse',localisationChasseRouter)
app.use('/trucAstuceChasse',trucAstuceChasseRouter)
app.use('/localisationEspece',localisationEspeceRouter)

module.exports = app;
