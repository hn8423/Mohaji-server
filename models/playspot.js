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
    static associate(db) {
      this.hasMany(db.comment, { foreignKey: "playspot_id", sourceKey: "id" })
    }
  };
  playspot.init({
    spot_name: DataTypes.STRING,
    address: DataTypes.STRING,
    call: DataTypes.STRING,
    playspot_img: DataTypes.STRING,
    spot_description: DataTypes.STRING,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING,
    sort_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playspot',
  });
  return playspot;
};