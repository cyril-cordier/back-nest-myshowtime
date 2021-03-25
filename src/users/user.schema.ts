import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    phone:{
        type: String,
        required:false,
    },
    admin:{
        type: String,
        required:false,
        default: "false",
    },

});


UserSchema.pre('save', function(next){
    
    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {

        if(err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {

            if(err) return next(err);
            user.password = hash;
            next();

        });

    });

}); 

UserSchema.methods.checkPassword = function(attempt, callback){

    let user = this;

    bcrypt.compare(attempt, user.password, (err, isMatch) => {
        if(err) return callback(err);
        callback(null, isMatch);
    });

};