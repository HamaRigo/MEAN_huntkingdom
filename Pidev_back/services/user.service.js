// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../Models/user");
const Role = require("../Models/role");
// const {signedCookie} = require("cookie-parser");

module.exports = {
    // authenticate,
    getAll,
    getById,
    update,
    delete: _delete
};

// async function authenticate({ username , password }) {
//     const user = await User.findOne({ username });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//
//         const token = jwt.sign({ sub: user.id }, "rigo",);
//         // return {...user.toJSON() };
//
//      res =   signedcookie(jwt,token,{
//             httpOnly:true,
//             maxAge:120*1000})
//
//         return {...user.toJSON() };
//     }
// }

async function getAll(req) {
    // const user = new User(userParam);
    const {page = 1, limit = 10} = req.query
    return   await User.find()
        .sort('name')
        .limit(limit * 1)
        .skip((page -1)* limit).exec();
    // return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}



async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);

    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}



