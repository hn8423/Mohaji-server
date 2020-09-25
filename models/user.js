'use strict';
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
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    passwords: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};