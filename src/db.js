const { Sequelize } = require ("sequelize"); // importar o sequelize
const dotenv = require ("dotenv/config.js") // importar o dotenv para localizar as variáveis de ambiente

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql", 
});

try {

    sequelize.authenticate()
    console.log('conectado com sucesso no Sequelize')

}catch(err) {
    console.log('não foi possivel conectar:  ', err)
}


module.exports = sequelize