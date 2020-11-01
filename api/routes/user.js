const userController = require('../controllers/user');
const express = require('express');
const router = express.Router();

// POST
router.post('/addUser', userController.newUser); // créer un nouvel utilisateur (voir le model pour le body)
router.post('/id/:id/addProject', userController.newUserProject); // créer un nouvel utilisateur (voir le model pour le body)

router.post('/connection', userController.connection); // créer un nouvel utilisateur (voir le model pour le body)
router.post('/isAlreadyRegistered', userController.isAlreadyRegistered); // créer un nouvel utilisateur (voir le model pour le body)
router.post('/id/:id/addSkill', userController.newSkill);
// GET
router.get('/', userController.getUsers); // renvoi tous les users 
router.get('/name/:name', userController.getUserByName);
router.get('/id/:id', userController.getUserById);
router.get('/id/:id/projects', userController.getUsersProjects);
router.get('/skill/:skillName', userController.getBySkill);
router.get('/example', userController.emptyUser);

//
router.patch('/id/:id/setPic', userController.setUserPicture);




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
