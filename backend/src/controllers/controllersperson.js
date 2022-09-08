import Modelperson from  '../models/Modelperson.js';
import {isCpf} from 'node-simple-validator'
import validator from 'is-my-date-valid'

function findAll(req, res) {
    Modelperson.findAll({
      raw: true,
      nest : true
    }).then((result) => {
      return res.json(result)
    });
  };

  function findPerson(req, res) {
    Modelperson.findByPk(req.params.id).then((result) => {
      if(result == null){
        return res.status(404).json({message:"Person not found!"});
      }
      return res.json(result);
    });
    
  };

  async function addPerson(req, res) {

      // substitui o formato cpf com pontos e números para somente números
    req.body.cpf = req.body.cpf.replace(/\D/g,''); 

    const validar = validatePerson(req);
    
    validar.then(result => {
      Modelperson.create({
        name: req.body.name,
        birthday: req.body.birthday,
        cpf:req.body.cpf,
        createdAt: req.body.createdAt,
        updatedAt:req.body.updatedAt
      }).then((result) => res.json(result));
    }).catch(error => {
      return res.status(error.status_code).json({message:error.message});
    });

  }

  async function validatePerson(req, is_new = true) {
    
    const validate = validator({ format: 'YYYY-MM-DD' })
    
    if(!validate(req.body.birthday)){
        throw getObjException("birthday-format invalid",400);
    }
    
    const dataAtual= new Date().getTime()
    const data = new Date(req.body.birthday).getTime()
    if (data > dataAtual) {
        throw getObjException("A date in the future is not permited!",400);
    }

    if (is_new) {
      if(!isCpf(req.body.cpf)){
          throw getObjException("CPF inválido!",400);
      }
      
      const cpfExists = await Modelperson.findOne({
        where:({cpf:req.body.cpf})
      });
  
      if(cpfExists != null) {
        throw getObjException("This CPF was already registered!",400);
      }
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

    const validar = validatePerson(req, false);

    validar.then(result => {

      const dataPost = {
          name: req.body.name,
          birthday: req.body.birthday
      };

      const conditional = {
        where: {
          id: req.params.id,
        },
      };

      Modelperson.update(dataPost, conditional)
        .then((result) => res.status(204).json(result));
      
    }).catch(error => {
      return res.status(error.status_code).json({message:error.message});
    });
    
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
