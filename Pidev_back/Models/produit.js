var mongoose = require("mongoose");
var schema = mongoose.Schema;
var Produit = new schema({
    name: String,
    description: String,
    prix: Number,
    image: String,
    disponibilite: Boolean,
})

//module.exports= new mongoose.model('Model', Produit,"Produit");

module.exports = new mongoose.model('Produit', Produit);