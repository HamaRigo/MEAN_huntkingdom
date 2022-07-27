var mongoose=require('mongoose')
var schema=mongoose.Schema

var chienChasse=new schema({
    nom:String,
    description:String,
    photo:String,

})

var ChienChasse=mongoose.model('chienChasse',chienChasse)
module.exports=ChienChasse
