var express = require('express');
var router = express.Router();
var Commentaire = require("../Models/commentaire");



// Getting all
router.get('/', async (req, res) => {
    try {
        var commentaire = await Commentaire.find()
        res.json(commentaire)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getCommentaire, (req, res) => {
    res.json(res.commentaire)
})

// Creating one
router.post('/', async (req, res) => {
    var commentaire = new Commentaire({
        message:req.body.message,
        date_commentaire:req.body.date_commentaire,
    })
    try {
        const newCommentaire = await commentaire.save()
        res.status(201).json(newCommentaire)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getCommentaire, async (req, res) => {

    if (req.body.description != null) {
        res.commentaire.message = req.body.message
    }
    if (req.body.nom != null) {
        res.commentaire.nom = req.body.nom
    }
    if (req.body.description != null) {
        res.commentaire.date_commentaire = req.body.date_commentaire
    }
    try {
        let commentaire = await res.commentaire.save()
        res.json(commentaire)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getCommentaire, async (req, res) => {
    try {
        await res.commentaire.remove()
        res.json({ message: 'Deleted commentaire' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})







async function getCommentaire(req, res, next) {
    let commentaire
    try {
        commentaire = await Commentaire.findById(req.params.id)
        if (commentaire == null) {
            return res.status(404).json({ message: 'Cannot find commentaire' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.commentaire = commentaire
    next()
}
module.exports = router;
