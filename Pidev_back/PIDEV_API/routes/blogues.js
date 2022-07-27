var express = require('express');
var router = express.Router();
var Blogues=require('../Models/blogue')
const commentaire = require("../Models/commentaire");


// Getting all
router.get('/', async (req, res) => {
    try {
        var blogue = await Blogues.find()
        res.json(blogue)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getBlogue, (req, res) => {
    res.json(res.blogue)
})

// Creating one
router.post('/', async (req, res) => {
    var blogue = new Blogues({
        title: req.body.title,
        date_publication:req.body.date_publication,
        nom:req.body.nom,
        message:req.body.message,
        photo:req.body.photo,
        commentaires:req.body.commentaires
    })
    try {
        const newBlogue = await blogue.save()
        res.status(201).json(newBlogue)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getBlogue, async (req, res) => {
    if (req.body.title != null) {
        res.blogue.title = req.body.title
    }
    if (req.body.date_publication != null) {
        res.blogue.date_publication = req.body.date_publication
    }
    if (req.body.nom != null) {
        res.blogue.nom = req.body.nom
    }
    if (req.body.message != null) {
        res.blogue.message = req.body.message
    }
    if (req.body.photo != null) {
        res.blogue.photo = req.body.photo
    }
    if (req.body.commentaires != null) {
        res.blogue.commentaires = req.body.commentaires
    }
    try {
        let blogue = await res.blogue.save()
        res.json(blogue)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getBlogue, async (req, res) => {
    try {
        await res.blogue.remove()
        res.json({ message: 'Deleted blogue' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})







async function getBlogue(req, res, next) {
    let blogue
    try {
        blogue = await Blogues.findById(req.params.id)
        if (blogue == null) {
            return res.status(404).json({ message: 'Cannot find blogue' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.blogue = blogue
    next()
}
module.exports = router;
