const userController = require('../controllers/user');
const express = require('express');
const user = require('../controllers/user');
const router = express.Router();

router.post('/addUser', userController.newUser); // créer un nouvel utilisateur (voir le model pour le body)
router.get('/', userController.getUsers); // renvoi tous les users 
router.get('/name/:name', userController.getUserByName);
router.get('/id/:id', userController.getUserById);
router.get('/skill/:skillName', userController.getBySkill);

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
