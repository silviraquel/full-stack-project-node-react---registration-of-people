const { DataTypes } = require ("sequelize");
import db from '../db.js';

export default Modelperson = db.define( 'people', {
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

})

