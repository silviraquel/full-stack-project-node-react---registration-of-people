import express from 'express';
import routes from './routes/router.js';

import db from './src/db.js';

import Modelperson from './src/models/Modelperson.js'
import Modeladdress from './src/models/Modeladdress.js'


const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.json({ name: "Página inicial" });
  });
  

db.sync().then(()=> {
    app.listen(3000)
})
