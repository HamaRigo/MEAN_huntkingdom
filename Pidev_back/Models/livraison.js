var mongoose = require("mongoose");
var schema = mongoose.Schema;
var Livraison = new schema({
    label: String
})
//module.exports= new mongoose.model('Model', user,"user");

module.exports = new mongoose.model('Livraison', Livraison);