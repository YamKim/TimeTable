/**
* @param {import('sequelize').Sequelize} sequelize
* @param {any} DataTypes
*/ 

module.exports = (sequelize, DataTypes) => {
  const Journey = sequelize.define('Journey', {
    /*
    begTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    endTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    */
    memo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Journey;
}