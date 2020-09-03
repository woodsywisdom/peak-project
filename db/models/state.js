'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    description: DataTypes.TEXT,
    name: DataTypes.STRING
  }, {});
  State.associate = function(models) {
    // associations can be defined here
  };
  return State;
};
