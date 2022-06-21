import Modelperson from  '../models/Modelperson.js';
import {isCpf} from 'node-simple-validator'
import validator from 'is-my-date-valid'

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
    const validate = validator({ format: 'YYYY-MM-DD' })

    if(!validate(req.body.birthday)){
      return res.status(400).json({message: "birthday-format inválido"})
    }

    if(!isCpf(req.body.cpf)){
      return res.status(400).json({message:"CPF inválido"});
    }

    Modelperson.create({
      name: req.body.name,
      birthday: req.body.birthday,
      cpf: req.body.cpf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    }).then((result) => res.json(result));
  };

  async function updateperson(req, res) {
    await Modelperson.update(
      {
        name: req.body.name,
        birthday: req.body.birthday,
        cpf: req.body.cpf,
        createdAt: req.body.createdAt,
        updatedAt:req.body.updatedAt
        },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    Modelperson.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteperson(req, res) {
    await Modelperson.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    Modelperson.findAll().then((result) => res.json(result));
  }


  export default {findAll, findPerson, addPerson, updateperson, deleteperson};
