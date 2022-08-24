var mongoose = require("mongoose");
var schema = mongoose.Schema;
var etatpanier = new schema({
    label: String
})
module.exports= new mongoose.model('Model', etatpanier,"etat_panier");