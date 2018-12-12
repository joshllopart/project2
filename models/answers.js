module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("Answers", {
    res_msg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_link: {
      type: DataTypes.STRING
    },
    req_id: {
      type: DataTypes.INTEGER
    }
  });

  return Answers;
};
