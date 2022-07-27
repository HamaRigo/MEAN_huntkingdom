var express = require('express');
var router = express.Router();
var LocalisationChasse=require('../Models/localisationChasse')
var EspecesChasse = require("../Models/especeChasse");
var EspeceLocalisation = require("../Models/localisation-especes");



router.post('/:localisationChasse/:especeChasse',async (req,res)=>{

    var {localisationChasse,especeChasse}=req.params
    var l =await LocalisationChasse.findOne({nom:localisationChasse})
    var e =await EspecesChasse.findOne({nomEspece:especeChasse})
   var x=await EspeceLocalisation.findOne({localisationChasse:l._id,especeChasse:e._id})
console.log(x)
    if (!x )
      try {
            res.json(await EspeceLocalisation.create({localisationChasse: l._id, especeChasse: e._id}))
        }catch(err)
      {
        res.status(400).json({ message: err.message })
    }

})
router.get('/especes/:localisationChasse', async function(req, res, next) {

    res.json(await EspeceLocalisation.find({localisationChasse:req.params.localisationChasse}).populate("localisationChasse").populate("especeChasse"))

});
router.get('/localisation/:especeChasse', async function(req, res, next) {

    res.json(await EspeceLocalisation.find({especeChasse:req.params.especeChasse}).populate("especeChasse").populate("localisationChasse"))

});
router.get('/chart',async function(req,res,next){
    var localisation=await LocalisationChasse.find()
    var numberEspece=[]
    for (i of localisation){
      //  console.log(espece.countDocuments())
        numberEspece.push(await EspeceLocalisation.find({localisationChasse:i._id}).populate("localisationChasse").populate("especeChasse").countDocuments())
    }
    res.json({localisation,numberEspece})
})

// router.post('/addLocalisation/:especeChasse/:localisationChasse',async (req,res)=>{
//
//     var {localisationChasse,especeChasse}=req.params
//     var l =await LocalisationChasse.findOne({nom:localisationChasse})
//     var e =await EspecesChasse.findOne({nom:especeChasse})
//     var x=await EspeceLocalisation.findOne({localisationChasse:l._id,especeChasse:e._id})
//     console.log(x)
//     if (!x )
//         try {
//             res.json(await EspeceLocalisation.create({localisationChasse: l._id, especeChasse: e._id}))
//         }catch(err)
//         {
//             res.status(400).json({ message: err.message })
//         }
//
// })





module.exports = router;
