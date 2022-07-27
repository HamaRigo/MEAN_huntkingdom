var mongoose=require('mongoose')
var {Schema} = require("mongoose");
var LocalisationChasse=require('../Models/localisationChasse')
var EspecesChasse = require("../Models/especeChasse");



var schema=mongoose.Schema

var EspeceLocalisation=new schema({
    localisationChasse:{ type: Schema.Types.ObjectId, ref: 'localisationChasse' },
    especeChasse:{ type: Schema.Types.ObjectId, ref: 'especeChasse' },
})

var EspeceLocalisation=mongoose.model('especeLocalisation',EspeceLocalisation)
module.exports=EspeceLocalisation
