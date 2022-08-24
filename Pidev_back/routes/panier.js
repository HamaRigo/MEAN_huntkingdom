var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource panier');
});

var Panier = require("../Models/panier");
const Livraison = require("../Models/livraison");
const {Schema} = require("mongoose");

router.get('/liste_panier', function(req, res, next) {
    Panier.find(function (err,data){
            if(err) throw err;
            return res.json(data)
        }
    )
});

router.post('/ajouterPanier', async (req, res) => {
    var panier = new Panier({
        id_user: req.body.idUser,
        id_livraison:req.body.idLivraison,
        id_etat:req.body.idEtat,
        lignes:req.body.lignes,
        date_creation:new Date()
    });
    try {
        const newPanier = await panier.save()
        res.status(201).json(newPanier)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
router.post('/deletePanier', (req,res,next)=> {
    var id= req.body.id;
    Panier.findById({_id:id},function (err,data){
            if(err) throw err;
            data.remove();
            res.json(data);
        }
    )
})

router.post('/updatedPanier', (req,res,next)=> {
    var id= req.body.id;

    Panier.findById({_id:id},function (err,data){
            if(err) throw err;
            data.id_livraison=req.body.idLivraison,
            data.id_etat=req.body.idEtat,
            data.lignes=req.body.lignes,
            data.save();
            lignePanier.insertMany(req.body.lignes);
            res.json(data);
        }
    )
});
module.exports = router;
