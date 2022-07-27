var mongoose=require('mongoose')
var schema=mongoose.Schema

var trucAstuceChasse=new schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:String,
    photo:String

})

var TrucAstuceChasse=mongoose.model('trucAstuceChasse',trucAstuceChasse)
module.exports=TrucAstuceChasse
