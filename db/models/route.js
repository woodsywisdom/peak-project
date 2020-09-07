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
    mpId: {
      type: DataTypes.INTEGER,
    },
    areaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    locationIds: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    grade: {
      allowNull: false,
      type: DataTypes.STRING(25),
      validate: {
        len: [3, 25]
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
    firstAscent: {
      type: DataTypes.STRING(50),
      validate: {
        min: 0,
        max: 50,
      },
    },
    isTopRope: {
      type: DataTypes.BOOLEAN
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
