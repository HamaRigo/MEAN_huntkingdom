var express = require('express');
var router = express.Router();
var ChienChasse = require("../Models/chienChasse");



// Getting all
router.get('/', paginatedResults(ChienChasse), (req, res) => {
    // try {
    //     var chienChasse = await ChienChasse.find()
    //     res.json(chienChasse)
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

//Getting One
router.get('/:id', getChienChasse, (req, res) => {
    res.json(res.chienChasse)
})

// Creating one
router.post('/add', async (req, res) => {
    var chienChasse = new ChienChasse({
        nom:req.body.nom,
        description:req.body.description,
        photo:req.body.photo,
    })
    try {
        const newchienChasse = await chienChasse.save()
        res.status(201).json(newchienChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getChienChasse, async (req, res) => {

    if (req.body.nom != null) {
        res.chienChasse.nom = req.body.nom
    }
    if (req.body.description != null) {
        res.chienChasse.description = req.body.description
    }
    if (req.body.photo != null) {
        res.chienChasse.photo = req.body.photo
    }
    try {
        let chienChasse = await res.chienChasse.save()
        res.json(chienChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getChienChasse, async (req, res) => {
    try {
        await res.chienChasse.remove()
        res.json({ message: 'Deleted Chien de Chasse' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



async function getChienChasse(req, res, next) {
    let chienChasse
    try {
        chienChasse = await ChienChasse.findById({_id:req.params.id})
        if (chienChasse == null) {
            return res.status(404).json({ message: 'Cannot find Chien de Chasse' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.chienChasse = chienChasse
    next()
}

module.exports = router;
