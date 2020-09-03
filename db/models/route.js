'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
      validate: {
        len: [1, 50],
      }
    },
    areaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    grade: {
      allowNull: false,
      type: DataTypes.STRING(10),
      validate: {
        len: [3, 10]
      }
    },
    rating: {
      allowNull: false,
      type: DataTypes.NUMERIC(2,1),
      validate: {
        min: 0,
        max: 4,
      }
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(20),
      validate: {
        isIn: [[
          'Trad',
          'Sport',
          'Other',
        ]],
      },
    },
    length: {
      type: DataTypes.NUMERIC(4,0),
      validate: {
        max: 9999,
        min: 5,
      }
    },
    pitches: {
      type: DataTypes.NUMERIC(2,0),
      validate: {
        min: 0,
        max: 99,
      },
    },
    creatorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    approach: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {});
  Route.associate = function(models) {
    // associations can be defined here
    Route.belongsTo(models.Area, { foreignKey: 'areaId' });
    Route.belongsTo(models.User, { foreignKey: 'creatorId' });
  };
  return Route;
};
