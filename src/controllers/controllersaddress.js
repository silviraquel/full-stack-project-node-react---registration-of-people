import Modeladdress from  '../models/Modeladdress.js';

function findAlladdress(req, res) {
    Modeladdress.findAll().then((result) => res.json(result));
  };

  function findAddress(req, res) {
    Modeladdress.findByPk(req.params.id).then((result) => {
      if(result == null){
        return res.status(404).json({message:"Endereço não encontrado"});
      }
      return res.json(result);
    });
    
  };

  function addAddress(req, res) {
    Modeladdress.create({
      city: req.body.city,
      cep: req.body.cep,
      uf: req.body.uf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    }).then((result) => res.json(result));
  }

  async function updateAddress(req, res) {
    
   await Modeladdress.update(
    {
      city: req.body.city,
      cep: req.body.cep,
      uf: req.body.uf,
      createdAt: req.body.createdAt,
      updatedAt:req.body.updatedAt
    },
    {
    where: {
      id: req.params.id,
    },
   }
   );
    Modeladdress.findByPk(req.params.id).then((result) => res.json(result));
  }
  


  export default {findAlladdress, findAddress, addAddress, updateAddress};

