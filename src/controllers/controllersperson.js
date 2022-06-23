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

    
    let cleanCpf = req.body.cpf.replace(/\D/g,'');
    
    const validate = validator({ format: 'YYYY-MM-DD' })
    
    if(!validate(req.body.birthday)){
      return res.status(400).json({message: "birthday-format inválido"})
    }
    
    const dataAtual= new Date().getTime()
    const data = new Date(req.body.birthday).getTime()
    if (data > dataAtual) {
      return res.status(400).json({message: "Esta data não pode ser futura!"})
    }
    
    if(!isCpf(cleanCpf)){
      return res.status(400).json({message:"CPF inválido"});
    }
    
    const cpfExists = await Modelperson.findOne({
      where:({cpf:cleanCpf})
    });
    if(cpfExists){
      return res.json({message:"Esse CPF já foi cadastrado"})
    }
    
    Modelperson.create({
      name: req.body.name,
      birthday: req.body.birthday,
      cpf: cleanCpf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    }).then((result) => res.json(result));
  }

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
