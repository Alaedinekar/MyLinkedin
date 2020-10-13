const userController = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/addUser', userController.newUser); // créer un nouvel utilisateur (voir le model pour le body)
router.get('/', userController.getUsers); // renvoi tous les users 

module.exports = router;

/*
app.get('/personne',async (req,res)=> {
    try {
    const personne = await DB_URI.find()
    res.send(personne)}
    catch (error){
        res.status(500).json({message:err.message})
    }//Select * from tablepersonne
})
*/