const { DataTypes } = require ("sequelize");
const db = require ('../db.js');

const Modelperson = db.define( 'people', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:  true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
    },

    birthday: {
        type: DataTypes.DATE,
    },
    
    cpf: {
        type: DataTypes.STRING,
    },

    created_at: {
        type: DataTypes.TIME,       
    },
})

module.exports = Modelperson;