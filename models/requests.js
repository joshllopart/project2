module.exports = function(sequelize, DataTypes) {
  var Requests = sequelize.define("Requests", {
    req_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    req_msg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.INTEGER
    },
    answered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });


  return Requests;
};
