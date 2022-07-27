var mongoose=require('mongoose')
const {Schema} = require("mongoose");
var schema=mongoose.Schema
var LocalisationChasse=require('../Models/localisationChasse')

var EspeceLocalisation = require("../Models/localisation-especes");


var EspeceChasse=new schema({
    nomEspece:String,
    descriptionEspece:String,
    photo:String,
})

var EspeceChasse=mongoose.model('especeChasse',EspeceChasse)
module.exports=EspeceChasse
