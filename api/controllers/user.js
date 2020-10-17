const userModel = require('../models/user');

const newUser = async (req,res) => {
    const data = req.body;

    const newUser = new userModel({
        userName : data.userName,
        userEmail : data.userEmail,
        userPhoneNumber : data.userPhoneNumber,
        skillsList : data.skillsList
    });
    await newUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message : err.message});
    })
}

const getUsers = async (req,res) => {
    await userModel.find()
    .then(result => {
       res.status(200).send(result)
    })
    .catch(error => {
        res.send({message : error.message})
    })
}
const getUserByName = async (req,res) => {
    const name = req.params.name;
    await userModel.find({userName : name})
    .then(rslt => {
        rslt.length ? res.status(200).json(rslt) : res.status(200).json({erreur : "Utilisateur inconnu ...."})
    })
    .catch(err => {
        res.status(400).send({message : err.message});
    })
}
const getBySkill = async (req,res) => {
    const skillName = req.params.skillName;
    await userModel.find({"skillsList.skillName" : skillName})
    .then(rslt => {
        rslt.length ? res.status(200).json(rslt) : res.status(400).json({erreur : "Aucun utilisateur ne maitrise cette technologie"})
    })
    .catch(err => {
        res.status(400).send({message : err.message});
    })
}
const getUserById = async (req,res) => {
    const id = req.params.id;
    await userModel.find({_id : id})
    .then(rslt => {
        rslt.length ? res.status(200).json(rslt) : res.status(200).json({erreur : "Utilisateur inconnu ...."})
    })
    .catch(err => {
        res.status(400).send({message : err.message});
    })
}
const newSkill = async (req,res) => {
    // const id = req.params.id;
    // let skill = {skillName : req.body.skillName};
    // let newData = {$push : {skillsList : skill}};
    // await userModel.findByIdAndUpdate(id, newData, (err, doc) => {
    //     // res.send(doc.);
    // })  TODO
}
module.exports = {
    newUser : newUser,
    getUsers : getUsers,
    getUserByName : getUserByName,
    getBySkill : getBySkill,
    getUserById : getUserById,
    newSkill : newSkill
}