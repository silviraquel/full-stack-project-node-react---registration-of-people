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

  async function addPerson(req, res) {

    req.body.cpf = req.body.cpf.replace(/\D/g,'');

    try {

      validatePerson(req);

      Modelperson.create({
        name: req.body.name,
        birthday: req.body.birthday,
        cpf:req.body.cpf,
        createdAt: req.body.createdAt,
        updatedAt:req.body.updatedAt
      }).then((result) => res.json(result));

    } catch (error) {
      return res.status(error.status_code).json({message:error.message});
    }

  }

  function validatePerson(req){
    
    const validate = validator({ format: 'YYYY-MM-DD' })
    
    if(!validate(req.body.birthday)){
        throw getObjException("birthday-format inválido",400);
    }
    
    const dataAtual= new Date().getTime()
    const data = new Date(req.body.birthday).getTime()
    if (data > dataAtual) {
        throw getObjException("Esta data não pode ser futura!",400);
    }
    
    if(!isCpf(req.body.cpf)){
        throw getObjException("CPF inválido!",400);
    }
    
    const cpfExists = Modelperson.findOne({
      where:({cpf:req.body.cpf})
    });
    if(cpfExists){
        throw getObjException("Esse CPF já foi cadastrado!",400);
    }
  }

  function getObjException(message, status_code) {
    if(status_code === undefined) {
      status_code = 200;
    }
    return {
      message:message,
      status_code:status_code
    }
  }

  async function updateperson(req, res) {

    req.body.cpf = req.body.cpf.replace(/\D/g,'');
    
    try {
      validatePerson(req);
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
      
    } catch (error) {
      return res.status(error.status_code).json({message:error.message});
    }
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
