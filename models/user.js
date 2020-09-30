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
    static associate(db) {
      this.hasMany(db.user_tag, { foreignKey: "user_id", sourceKey: "id" })
    }
  };
  user.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_img: DataTypes.STRING,
    tag_id: DataTypes.JSON
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
