const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const schema = mongoose.Schema;
const user = new schema({
    first_name: { type:String, default : '' },
    last_name: { type:String, default : '' },
    email: {type: String, require: true, unique: true},
    username: {type: String, require: true, unique: true},
    password: {type: String, required: true},
    phone: {type: Number},
    status: {type: Boolean, require: true, default: true},
    profile_image: {type: String, default: 'default.png'},
    role_id: {type: mongoose.Schema.Types.ObjectId, ref: 'role', default: "62bf9af180ef98715c71ae20", require: true}
},{
    timestamps:true

});
user.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
user.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports= mongoose.model('users', user);