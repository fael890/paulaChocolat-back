'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orcamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orcamento.belongsTo(models.Usuario);
    }
  }
  Orcamento.init({
    massa: DataTypes.INTEGER,
    recheio1: DataTypes.INTEGER,
    recheio2: DataTypes.INTEGER,
    cobertura: DataTypes.INTEGER,
    frase: DataTypes.STRING,
    data: DataTypes.STRING,
    usuarioId: DataTypes.UUID
  }, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'Orcamento',
  });
  return Orcamento;
};