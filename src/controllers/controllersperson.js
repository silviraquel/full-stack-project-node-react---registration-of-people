import Modelperson from  '../models/Modelperson.js';

function findAll(req, res) {
    Modelperson.findAll().then((result) => res.json(result));
  };

  function findPerson(req, res) {
    Modelperson.findByPk(req.params.id).then((result) => {
      if(result == null){
        return res.status(404).json({message:"Pessoa não encontrada"});
      }
      return res.json(result);
    });
    
  };

  function addPerson(req, res) {
    Modelperson.create({
      name: req.body.name,
      birthday: req.body.birthday,
      cpf: req.body.cpf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    }).then((result) => res.json(result));
  };

  export default {findAll, findPerson, addPerson};
