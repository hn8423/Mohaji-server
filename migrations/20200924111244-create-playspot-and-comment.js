'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('playspots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spot_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      call: {
        type: Sequelize.STRING
      },
      playspot_img: {
        type: Sequelize.STRING
      },
      spot_description: {
        type: Sequelize.STRING
      },
      open_time: {
        type: Sequelize.STRING
      },
      close_time: {
        type: Sequelize.STRING
      },
      sort_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      playspot_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "playspots",
          key: "id"
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('playspots');
    await queryInterface.dropTable('comments');
  }
};