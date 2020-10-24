const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skillName : {
        type : String,
        required : true
    }
}
);
const UserSchema = mongoose.Schema({
    userFirstName : {
        type : String,
        required : true
    },
    userLastName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    },
    userPhoneNumber : {
        type : String,
        required : true
    },
    userAddress : {
        type : String,
        required : true
    },
    skillsList : [skillSchema]
})

module.exports = mongoose.model('Users', UserSchema);