import Modelperson from  '../models/Modelperson.js';

function findAll(req, res) {
    Modelperson.findAll().then((result) => res.json(result));
  };

  export default findAll;
