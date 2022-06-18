import Modelperson from  '../models/Modelperson.js';

function addperson(req, res) {
    Modelperson.create({
      name: req.body.name,
      birthday: req.body.birthday,
      cpf: req.body.cpf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    }).then((result) => res.json(result));
  }
    
  export default addperson;