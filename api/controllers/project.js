const projectModel = require('../models/project');

const deleteProject = async (req,res) => {
    const projectId = req.params.idProj;
    await projectModel.deleteOne({_id : projectId})
    .then((result) => {
        res.status(200).send({message : "Great Success ! Project has been deleted !"})
    })
    .catch((err) => {
        res.status(400).send({message : "C'est dommage, il ya eu une tuile lors de la suppression !", error : err.message});
    })
}
module.exports = {
    deleteProject : deleteProject
}