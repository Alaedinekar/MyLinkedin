const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skillName : {
        type : String,
        required : true
    }
}
);
const LinkSchema = mongoose.Schema({
    linkTarget : {
        type : String,
        required : true
    },
    URL : {
        type : String,
        required : true
    }
})
const LocationSchema = mongoose.Schema({
    longitude : {
        type : Number,
        required : false
    },
    latitude : {
        type : Number,
        required : false
    }
})
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
    picUrl: {
        type: String,
        required: false,
        default: "https://vignette.wikia.nocookie.net/heros/images/a/a5/Winnie_l%27Ourson_Infobox.jpeg/revision/latest?cb=20200607154813&path-prefix=fr"
    },
    location: LocationSchema,
    skillsList : [skillSchema],
    linkList: [LinkSchema]

})

module.exports = mongoose.model('Users', UserSchema);