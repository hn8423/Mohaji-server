'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playspot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  playspot.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    call: DataTypes.STRING,
    playspot_img: DataTypes.STRING,
    spot_description: DataTypes.STRING,
    comment_id: DataTypes.INTEGER,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING,
    sort_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playspot',
  });
  return playspot;
};