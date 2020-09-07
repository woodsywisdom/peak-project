'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mpId: {
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      areaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Areas',
          key: 'id',
        },
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      locationIds: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      grade: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      rating: {
        allowNull: false,
        type: Sequelize.NUMERIC(2,1),
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      length: {
        type: Sequelize.NUMERIC(4,0),
      },
      pitches: {
        type: Sequelize.NUMERIC(2,0),
      },
      creatorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      approach: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      firstAscent: {
        type: Sequelize.STRING(50),
      },
      isTopRope: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Routes');
  }
};
