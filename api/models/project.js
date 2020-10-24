const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skillName : {
        type : String,
        required : true
    }
}
);
const ProjectSchema = mongoose.Schema({
    idOwner : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    projectName : {
        type : String,
        required : true
    },
    groupSize : {
        type : Number,
        required : true
    },
    languagesInvolved : [skillSchema],
    shortDescription : {
        type : String,
        required : true
    },
    longDescription : {
        type : String,
        required : true
    },
    devTime : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : false
    }
})

module.exports = mongoose.model('Project', ProjectSchema);