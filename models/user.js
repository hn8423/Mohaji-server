'use strict';
const { hooksController } = require('../moduleStorage')

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      this.hasMany(db.comment, { foreignKey: "user_id", sourceKey: "id" })
    }
  };
  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_img: DataTypes.STRING,
    tag_id: DataTypes.INTEGER
  },

    {
      hooks: {
        beforeCreate: hooksController.beforeCreate,
        beforeFind: hooksController.beforeFind

      },
      sequelize, modelName: 'user',
    });
  return user;
};
