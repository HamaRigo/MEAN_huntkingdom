var mongoose=require('mongoose')
const {Schema} = require("mongoose");
var schema=mongoose.Schema

var commentaire=new schema({
    _id: Schema.Types.ObjectId,
    message:String,
    date_commentaire:String,

})

var Commentaire=mongoose.model('commentaire',commentaire)
module.exports=Commentaire
