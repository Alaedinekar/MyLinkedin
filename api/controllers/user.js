const userModel = require('../models/user');

const newUser = async (req,res) => {
    const data = req.body;

    const newUser = new userModel({
        userName : data.userName,
        userEmail : data.userEmail,
        userPhoneNumber : data.userPhoneNumber 
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
    const users = await userModel.find();
    res.json(users);
}

module.exports = {
    newUser : newUser,
    getUsers : getUsers
}