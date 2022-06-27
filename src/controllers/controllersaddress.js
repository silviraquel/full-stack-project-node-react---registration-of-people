import Modeladdress from  '../models/Modeladdress.js';

function findAlladdress(req, res) {
    Modeladdress.findAll().then((result) => res.json(result));
  };

  export default {findAlladdress};
