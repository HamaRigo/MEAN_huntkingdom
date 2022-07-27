var mongoose=require('mongoose')
var schema=mongoose.Schema

var trucAstuceChasse=new schema({
    title:String,
    description:String,
    photo:String

})

var TrucAstuceChasse=mongoose.model('trucAstuceChasse',trucAstuceChasse)
module.exports=TrucAstuceChasse
