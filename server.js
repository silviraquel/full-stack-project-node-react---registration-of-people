import express from 'express';
import routes from './routes.js'
import db from './src/db.js';

const Modelperson = require ('./src/models/Modelperson')

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    return res.json({ name: "Ciclano Fulano" });
  });
  

db.sync().then(()=> {
    app.listen(3000)
})
