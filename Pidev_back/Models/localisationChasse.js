var mongoose=require('mongoose')

var {Schema} = require("mongoose");


var EspecesChasse = require("../Models/especeChasse");
var EspeceLocalisation = require("../Models/localisation-especes");



var schema=mongoose.Schema
var LocalisationChasse=new schema({
    longitude: {
        type: String,
        required: true,
        unique: true,
    },
    latitude:{
        type: String,
        required: true,
        unique: true,
    },
    nom:{
        type: String,
        required: true,
        unique: true,
    },
    description:String,
    photo:String,

})

var LocalisationChasse=mongoose.model('localisationChasse',LocalisationChasse)
module.exports=LocalisationChasse
