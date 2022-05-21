const { DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Images',{
        id:{
            type: DataTypes.STRING,
            defaultValue: (()=> `image-${Math.round(Math.random()*1000000)}`),
            allowNull: false,
            primaryKey: true,
          },
        result:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}