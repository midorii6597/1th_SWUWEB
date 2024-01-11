const {Sequelize} = require("sequelize");


class Subclub extends Sequelize.Model {
  static initiate(sequelize) {
    Subclub.init({
      subclubname : {
        type : Sequelize.STRING(255),
        allowNull : false,
      }
      // createdAt : {
      //   type : Sequelize.DATE,
      //   allowNull : false,
      //   defaultValue : Sequelize.NOW, //DEFAULT now()
      // },
      // updatedAt:{
      //   type : Sequelize.DATE,
      //   allowNull : false,
      //   defaultValue : Sequelize.NOW, //DEFAULT now() 
      // },
      
    }, {
      sequelize,
      timestamps : true,
      underscored : false,
      modelName : "Subclub",
      tableName : "subclubs",
      paranoid : false,
      charset : "utf8",
      collate : "utf8_general_ci",
  });
}

  static associate(db){
    db.Subclub.belongsTo(db.User,{foreignKey : "userId", targetKey: "id", onDelete: "CASCADE"});
    
  }

};

module.exports = Subclub;