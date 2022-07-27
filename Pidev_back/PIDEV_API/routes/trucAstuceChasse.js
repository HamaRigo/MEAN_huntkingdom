var express = require('express');
var router = express.Router();
var TrucAstuceChasse = require("../Models/trucAstuceChasse");



// Getting all
router.get('/', async (req, res) => {
    try {
        var trucAstuceChasse = await TrucAstuceChasse.find()
        res.json(trucAstuceChasse)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getTrucAstuceChasse, (req, res) => {
    res.json(res.trucAstuceChasse)
})

// Creating one
router.post('/', async (req, res) => {
    var trucAstuceChasse = new TrucAstuceChasse({
        title:req.body.title,
        description:req.body.description,
        photo:req.body.photo
    })
    try {
        const newtrucAstuceChasse = await trucAstuceChasse.save()
        res.status(201).json(newtrucAstuceChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getTrucAstuceChasse, async (req, res) => {

    if (req.body.title != null) {
        res.trucAstuceChasse.title = req.body.title
    }
    if (req.body.description != null) {
        res.trucAstuceChasse.description = req.body.description
    }
    if (req.body.photo != null) {
        res.trucAstuceChasse.photo = req.body.photo
    }
    try {
        let trucAstuceChasse = await res.trucAstuceChasse.save()
        res.json(trucAstuceChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getTrucAstuceChasse, async (req, res) => {
    try {
        await res.trucAstuceChasse.remove()
        res.json({ message: 'Deleted truc et Astuce de Chasse' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})







async function getTrucAstuceChasse(req, res, next) {
    let trucAstuceChasse
    try {
        trucAstuceChasse = await TrucAstuceChasse.findById(req.params.id)
        if (trucAstuceChasse == null) {
            return res.status(404).json({ message: 'Cannot find truc et Astuce de Chasse' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.trucAstuceChasse = trucAstuceChasse
    next()
}
module.exports = router;
