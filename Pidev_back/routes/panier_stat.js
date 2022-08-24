var express = require('express');

var router = express.Router();
var Panier = require("../Models/panier");
//trouver les panier par  mode livraison
router.get('/panier_mode_livraison', function(req, res, next) {
    var id_livraison= req.body.id_livraison;
    //var myquery = { label:label,quantity :{ $gt: 2 } }; $gte // qty: { $in: [ 5, 15 ]//$lt: 20//$lte//$ne: 20/$nin: [ 5, 15 ] //$and // $or//
    //var myquery = { label:label,quantity :{ $gt: 2 } };
    var myquery = { id_livraison:id_livraison };
    var nbre1;
    var nbre2;
    Panier.find(myquery,function (err,data){
            if(err) throw err;
             nbre1=data.length;
        Panier.find(function (err,data){
                if(err) throw err;
                nbre2=data.length;
            var result={"nombre de panier":nbre1,"pourcentage %":(nbre1/nbre2)*100 }
             return res.json(result)
            }
        )
        }
    )

  /*
  //  ;*/
});
//le produit le plus vendu

router.get('/produit_plus_vendu', function(req, res, next) {
    var label= req.body.label;
    let result=[];
    Panier.find(function (err,data) {
        if (err) throw err;
        let allLignes=[];
        data.forEach(e=>allLignes=allLignes.concat(e.lignes));

         result = allLignes.map(e =>
            ({...e,
                occurence: allLignes.filter(l => l.id_produit == e.id_produit).length,
                all_qte:allLignes.filter(l => l.id_produit == e.id_produit).reduce((a,b)=>a+b.quantity,0),
                id_produit: e.id_produit
            }))
            .filter((l, index, items) => items.findIndex(x => x.id_produit == l.id_produit) == index)
            .sort((a, b) => {
                return b.occurence - a.occurence;
            });

        res.json(result);
    });

});
// produit par user

// taux des panier par etat
router.get('/panier_etat_panier', function(req, res, next) {
    var id_etat= req.body.id_etat;
    var myquery = { id_etat:id_etat };
    var nbre1;
    var nbre2;
    Panier.find(myquery,function (err,data){
            if(err) throw err;
            nbre1=data.length;
            Panier.find(function (err,data){
                    if(err) throw err;
                    nbre2=data.length;
                    var result={"nombre de panier":nbre1,"pourcentage %":(nbre1/nbre2)*100 }
                    return res.json(result)
                }
            )
        }

    )
});
router.post('/rechercheproduit', function(req, res, next) {
    var label= req.body.label;
    //var myquery = { label:label,quantity :{ $gt: 2 } }; $gte // qty: { $in: [ 5, 15 ]//$lt: 20//$lte//$ne: 20/$nin: [ 5, 15 ] //$and // $or//
    var myquery = { label:label,quantity :{ $gt: 2 } };
    Produit.find(myquery,function (err,data){
            if(err) throw err;

            res.render("home.twig",{data})
        }
    )
});
module.exports = router;