module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define("Links", {
    provided_link: {
      type: DataTypes.STRING,
    },
    converted_link: {
      type: DataTypes.STRING
    },
    visits: {
        type: DataTypes.INTEGER,
        defaultValue: 0 
    },
    affiliate_link: {
        type: DataTypes.BOOLEAN
    },
    req_id: {
     type: DataTypes.INTEGER 
    }
  });

  return Links;
};
