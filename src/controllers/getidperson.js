import Modelperson from  '../models/Modelperson.js';

function findPerson(req, res) {
    Modelperson.findByPk(req.params.id).then((result) => res.json(result));
  };

  export default findPerson;
