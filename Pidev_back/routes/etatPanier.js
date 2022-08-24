var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource panier');
});


//var EtatPanier= require("../models/etatpanier");
/*router.get('/liste_etat', function(req, res, next) {
    EtatPanier.find(function (err,data){
            if(err) throw err;
            //  return res.json(data)
            res.render("listeEtat.twig",{data})

        }
    )
});*/
var EtatPanier= require("../models/etatpanier");
router.get('/liste_etat', function(req, res, next) {
    EtatPanier.find(function (err,data){
            if(err) throw err;
            return res.json(data)
            //res.render("listeEtat.twig",{data})
        }
    )
});


router.get('/etat/:id', getEtatPanier1, async (req, res) => {

    try {
        return res.json(res.etatPanier)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.post('/ajouterEtat', async (req, res) => {
    var etatPanier = new EtatPanier({
        label: req.body.label,
    });
    try {
        const newEtatPanier = await etatPanier.save()
        res.status(201).json(newEtatPanier)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
router.post('/deleteEtat', getEtatPanier, async (req, res) => {

    try {
        await res.etatPanier.remove()
        res.json({ message: 'Deleted etatPanier' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
async function getEtatPanier1(req, res, next) {
     let etatPanier
     try {
         etatPanier = await EtatPanier.findById(req.params.id)

         if (etatPanier == null) {
             return res.status(404).json({ message: 'Cannot find etatPanier' })
         }
     } catch (err) {
         return res.status(500).json({ message: err.message })
     }

     res.etatPanier = etatPanier;

     next();
}
async function getEtatPanier(req, res, next) {

      let etatPanier
      try {
          etatPanier = await EtatPanier.findById(req.body.id)

          if (etatPanier == null) {
              return res.status(404).json({ message: 'Cannot find etatPanier' })
          }
      } catch (err) {
          return res.status(500).json({ message: err.message })
      }

      res.etatPanier = etatPanier;
      next();
}
router.post('/updateEtat', (req,res,next)=> {
    var id= req.body.id;

    EtatPanier.findById({_id:id},function (err,data){
            if(err) throw err;
            ///   res.json(data);
            data.label= req.body.label;
            data.save();
            res.json(data);
        }
    )

});


module.exports = router;