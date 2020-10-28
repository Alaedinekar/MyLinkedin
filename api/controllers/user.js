const userModel = require('../models/user');
const projectModel = require('../models/project');
const { Mongoose } = require('mongoose');
const md5 = require('md5');


const newUser = async (req,res) => {
    const data = req.body;
    const newUser = new userModel({
        userFirstName : data.userFirstName.toUpperCase(),
        userLastName : data.userLastName.toUpperCase(),
        userEmail : data.userEmail,
        userPassword : md5(data.userPassword),
        userPhoneNumber : data.userPhoneNumber,
        userAddress : data.userAddress,
        skillsList : data.skillsList,
        linkList: data.linkList
    });
    await newUser.save()
    .then(data => {
        res.json({message: "Sucess, correctly added to the dataBASE"});
    })
    .catch(err => {
        res.status(400).json({message : err.message});
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
const isAlreadyRegistered = async (req,res) => {
    const body = req.body;
    await userModel.find({userEmail : body.userEmail})
    .then(rslt => {
        rslt.length ? res.status(403).json({erreur: "Déjà inscrit..."}) : res.status(200).json({erreur : "Tu peux entrer akhi"})
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

const newUserProject = async (req,res) => {
    const data = req.body;
    const userId = req.params.id;
    const newProject = new projectModel({
        idOwner : userId,
        projectName : data.projectName,
        groupSize : data.groupSize,
        languagesInvolved : data.languagesInvolved,
        shortDescription : data.shortDescription,
        longDescription : data.longDescription,
        devTime : data.devTime,
        date : data.date

    });
    await newProject.save()
    .then((result) => {
        res.json({message: "Sucess, correctly added to the dataBASE"});
    })
    .catch(err => {
        res.json({message : err.message});
    })
}
const emptyUser = async (req,res) => {
    let obj = userModel.schema.paths;
    res.send(Object.keys(obj));
}
const getUsersProjects = async (req,res) => {
    const userId = req.params.id;
    await projectModel.find({idOwner : userId})
    .then(result => {
       res.status(200).send(result)
    })
    .catch(error => {
        res.status(400).send({message : error.message})
    })
}

const connection = async (req,res) => {
    const data = req.body;
    await userModel.find({userEmail : data.userEmail})
    .then(result => {
        if(result.length > 0){
            if(md5(data.userPassword) == result[0].userPassword){
                res.status(200).send({message : `Great success ! ${result[0].userFirstName + " " + result[0].userLastName } is connected !`, userId: result[0]._id})
            }else{
                res.status(401).send({message : "Wrong password"})
            }
        }else{
            res.status(401).send({message : "Wrong email"})
        }
    })
    .catch(error => {
        res.status(400).send({message : error.message})
    })
}
module.exports = {
    newUser : newUser,
    getUsers : getUsers,
    getUserByName : getUserByName,
    getBySkill : getBySkill,
    getUserById : getUserById,
    newSkill : newSkill,
    newUserProject : newUserProject,
    getUsersProjects : getUsersProjects,
    connection : connection,
    emptyUser: emptyUser,
    isAlreadyRegistered: isAlreadyRegistered
}