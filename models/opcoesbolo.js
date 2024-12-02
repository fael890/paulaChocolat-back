'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpcoesBolo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OpcoesBolo.init({
    tipo: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'OpcoesBolo',
  });
  return OpcoesBolo;
};