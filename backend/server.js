import express from 'express';
import routes from './routes/router.js';
import cors from 'cors'

import db from './src/db.js';

import Modelperson from './src/models/Modelperson.js'
import Modeladdress from './src/models/Modeladdress.js'


const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.json({ name: "Página inicial" });
  });
  

db.sync().then(()=> {
    app.listen(3001)
})
