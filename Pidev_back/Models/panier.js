var mongoose = require("mongoose");
const {Schema} = require("mongoose");
var schema = mongoose.Schema;
var Panier = new schema({
    id_user: { type: Schema.Types.ObjectId, ref: 'User' },
    id_livraison:{ type: Schema.Types.ObjectId, ref: 'Livraison' },
    id_etat:{ type: Schema.Types.ObjectId, ref: 'EtatPanier' },
    lignes:[],
    date_creation:Date
})

module.exports = new mongoose.model('Panier', Panier);
