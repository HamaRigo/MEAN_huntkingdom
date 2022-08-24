var express = require('express');
var router = express.Router();



var Produit = require("../Models/produit");
router.get('/liste_produits', function(req, res, next) {
    Produit.find(function (err,data){
            if(err) throw err;
            return res.json(data)
        }
    )
});


router.post('/ajouterProduit', async (req, res) => {
    var produit = new Produit({
        name: req.body.name,
        description:req.body.description,
        prix: req.body.prix,
        image: req.body.image,
        disponibilite: req.body.disponibilite,
    });
    try {
        const newProduct = await produit.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
router.post('/updateproduit', (req,res,next)=> {
    var id= req.body.id;
    Produit.findById({_id:id},function (err,data){
            if(err) throw err;
            ///   res.json(data);
            data.name= req.body.name,
            data.description=req.body.description,
            data.prix= req.body.prix,
            data.image= req.body.image,
            data.disponibilite= req.body.disponibilite,
            data.save();
            res.json(data);
        }
    )
    //  res.redirect('/panier/liste_etat');
});
router.get('/liste_produits_prix/:from/:to', function(req, res, next) {
    var from= req.params.from;
    var to= req.params.to;

    var myquery = { 'prix': { '$gt': from, '$lt': to} };
    Produit.find(myquery,function (err,data){
            if(err) throw err;
            return res.json(data)
        }
    )
});
module.exports = router;
