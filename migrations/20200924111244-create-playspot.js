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
      name: {
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
      comment_id: {
        type: Sequelize.INTEGER
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('playspots');
  }
};