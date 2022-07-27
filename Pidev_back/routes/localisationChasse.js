var express = require('express');
var router = express.Router();
var LocalisationChasse=require('../Models/localisationChasse')
const EspecesChasse = require("../Models/especeChasse");
const {getDistance,convertDistance} = require("geolib");


// Getting all
router.get('/all' ,async (req, res) => {
    try {
        var localisationChasse = await LocalisationChasse.find()
        res.json(localisationChasse)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


})
// Getting all par page
router.get('/', paginatedResults(LocalisationChasse) ,async (req, res) => {
    // try {
    //     var localisationChasse = await LocalisationChasse.find()
    //     res.json(localisationChasse)
    // } catch (err) {
    //     res.status(500).json({ message: err.message })
    // }

    res.json(res.paginatedResults)
})

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        // const endIndex = page * limit

        const paginatedResults = []


        try {
            const total= await model.find().countDocuments()
            console.log(total)
            results = await model.find().limit(limit).skip(startIndex).exec()
            paginatedResults.push({results,total})
            res.paginatedResults = paginatedResults
            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

// Getting One
router.get('/:id', getLocalisationChasse, (req, res) => {
    res.json(res.localisationChasse)
})

// Creating one
router.post('/', async (req, res) => {
    var localisationChasse = new LocalisationChasse({
        longitude:req.body.longitude,
        latitude:req.body.latitude,
        nom:req.body.nom,
        description:req.body.description,
        photo:req.body.photo,
    })
    try {
        const newLocalisationChasse = await localisationChasse.save()
        res.status(201).json(newLocalisationChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getLocalisationChasse, async (req, res) => {
    if (req.body.longitude != null) {
        res.localisationChasse.longitude = req.body.longitude
    }
    if (req.body.latitude != null) {
        res.localisationChasse.latitude = req.body.latitude
    }
    if (req.body.nom != null) {
        res.localisationChasse.nom = req.body.nom
    }
    if (req.body.description != null) {
        res.localisationChasse.description = req.body.description
    }
    if (req.body.photo != null) {
        res.localisationChasee.photo = req.body.photo
    }
    try {
        let localisationChasse = await res.localisationChasse.save()
        res.json(localisationChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getLocalisationChasse, async (req, res) => {
    try {
        await res.localisationChasse.remove()
        res.json({ message: 'Deleted localisationChasee' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.get('/:lng/:lat', async (req, res) => {
const cordonee={latitude:req.params.lat,longitude:req.params.lng}
    const distances=[]
    try {
        var localisationChasse = await LocalisationChasse.find()

        for (i of localisationChasse){
            let lcalisationCordonee={latitude:i.latitude,longitude:i.longitude}
            let distance=convertDistance(getDistance(cordonee,lcalisationCordonee,1000),'km')
            distances.push({distance,i})
            distances.sort((a,b)=>{
                return a.distance-b.distance
            })
        }

        res.json(distances)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getLocalisationChasse(req, res, next) {
    let localisationChasse
    try {
        localisationChasse = await LocalisationChasse.findById(req.params.id)
        if (localisationChasse == null) {
            return res.status(404).json({ message: 'Cannot find localisationChasee' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.localisationChasse = localisationChasse
    next()
}

module.exports = router;
