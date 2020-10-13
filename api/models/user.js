const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skillName : {
        type : String,
        required : true
    }
}
);
const UserSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userPhoneNumber : {
        type : String,
        required : true
    },
    skillsList : [skillSchema]
})

module.exports = mongoose.model('Users', UserSchema);