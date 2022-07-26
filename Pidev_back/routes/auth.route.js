const router=require('express').Router();
const role=require('./../Models/role');
const authController=require('./../services/auth.controller')
router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/logout',authController.logout);

router.get('/role/:id', async function(req, res, next) {
    // let roleID
    // try {
        roleID = await role.findById(req.params.id)
//     }
//     if (roleID == null) {
//         return res.status(500).json({message: 'cannot find role'})
//     }
//     cath(err){
//     return res.status(500).json({message: err.message})
// }
// res.roleID=roleID
// next()
        // dont work return erreur
        if(!role) throw res.status(404).send({message: 'user not found'});
        res.json(roleID);

});
module.exports=router;