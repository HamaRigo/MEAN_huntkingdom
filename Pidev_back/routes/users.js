const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
// const {signedCookie} = require("cookie-parser");

const User = require("../Models/user");
const Role = require("../Models/role");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {authPage} = require("../helpers/middleware");



router.get('',  getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);
// authPage(["62bf9a8b80ef98715c71ae1f"]),

router.post('/recherche_or',function(req, res, next) {
  var username= req.body.username;
  var email= req.body.email
   var myquery = { $or :[{username:username} , {email:email}] };
  User.find(myquery,function (err,data){
    // dont work return erreur
         if(!User) throw res.status(404).send({message: 'user not found'});
          res.json(data);
       }
   )

});
router.post('/recherche_and',function(req, res, next) {
  var username= req.body.username;
  var email= req.body.email
    var myquery = { $and :[{username:username , email:email}] };
  User.find(myquery,function (err,data){
    // dont work return erreur
         if(!User) throw res.status(404).send({message: 'user not found'});
          res.json(data);
       }
   )

});
module.exports = router;



function getAll(req, res, next) {
    userService.getAll(req)
      .then(users => res.json(users))
      .catch(err => next(err));

}

function getCurrent(req, res, next) {
  userService.getById(req.user.sub)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById(req.params.id)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
      .then(() => res.json({message:"user updated !!"}))
      .catch(err => next(err));
}

function _delete(req, res, next) {
  userService.delete(req.params.id)
      .then(() => res.json({message:"user deleted !!"}))
      .catch(err => next(err));
}

