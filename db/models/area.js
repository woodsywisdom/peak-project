'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    elevation: {
      allowNull: false,
      type: DataTypes.STRING(10),
    },
    approach: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    stateId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    parentId: {
      type: DataTypes.INTEGER,
      validate: {
        incestuous(value) {
          if (value && parseInt(this.id) === parseInt(value)) {
            throw new Error('area can not be a parent of itself');
          }
        }
      }
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    locationIds: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  Area.associate = function(models) {
    // associations can be defined here
    Area.belongsTo(models.State, { foreignKey: 'stateId' });
    Area.belongsTo(models.Area, { foreignKey: 'parentId' });
    Area.hasMany(models.Area, { foreignKey: 'parentId' });
    Area.hasMany(models.Route, { foreignKey: 'areaId' });
  };
  return Area;
};
