var mongoose=require('mongoose')

var {Schema} = require("mongoose");


var EspecesChasse = require("../Models/especeChasse");
var EspeceLocalisation = require("../Models/localisation-especes");



var schema=mongoose.Schema
var LocalisationChasse=new schema({
    longitude:String,
    latitude:String,
    nom:String,
    description:String,

})

var LocalisationChasse=mongoose.model('localisationChasse',LocalisationChasse)
module.exports=LocalisationChasse
