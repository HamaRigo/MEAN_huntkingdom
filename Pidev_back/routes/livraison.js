var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
var Livraison = require("../Models/livraison");


router.get('/liste_livraison', function(req, res, next) {
    Livraison.find(function (err,data){
            if(err) throw err;
            return res.json(data)
        }
    )
});

router.post('/ajouterLivraison', async (req, res) => {
    var livraison = new Livraison({
        label: req.body.label,
    });
    try {
        const newLivraison = await livraison.save()
        res.status(201).json(newLivraison)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
router.post('/updatedLivraison', (req,res,next)=> {
    var id= req.body.id;

    Livraison.findById({_id:id},function (err,data){
            if(err) throw err;
            data.label= req.body.label,
            data.save();
            res.json(data);
        }
    )
});

//router.delete('/:id', getEtatPanier, async (req, res) => {
router.post('/deleteLivraison', (req,res,next)=> {
    var id= req.body.id;
    Livraison.findById({_id:id},function (err,data){
            if(err) throw err;
            data.remove();
            res.json(data);
        }
    )
    })
router.get('/mode/:id', getModeLivraison, async (req, res) => {

    try {
        return res.json(res.modeLivraison)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
async function getModeLivraison(req, res, next) {
    let modeLivraison
    try {
        modeLivraison = await Livraison.findById(req.params.id)
        if (modeLivraison == null) {
            return res.status(404).json({ message: 'Cannot find Mode Livraison' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.modeLivraison = modeLivraison;
    next();
}
module.exports = router;
