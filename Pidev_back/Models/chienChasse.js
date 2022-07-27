var mongoose=require('mongoose')
var schema=mongoose.Schema

var chienChasse=new schema({
    nom:{
        type: String,
        required: true,
        unique: true,
    },
    description:String,
    photo:String,

})

var ChienChasse=mongoose.model('chienChasse',chienChasse)
module.exports=ChienChasse
