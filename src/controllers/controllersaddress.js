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


  export default {findAlladdress, findAddress};

