const {Sequelize} = require("sequelize");

class Post extends Sequelize.Model {
  static initiate(sequelize) {
    Post.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title : {
        type : Sequelize.STRING(40),
        allowNull : false,
      },
      content : {
        type : Sequelize.TEXT,
        allowNull : false,
      }
      // createdAt : {
      //   type : Sequelize.DATETIME,
      //   allowNull : false,
      //   defaultValue : Sequelize.NOW, //DEFAULT now()
      // },
      // updatedAt:{
      //   type : Sequelize.DATE,
      //   allowNull : false,
      //   defaultValue : Sequelize.NOW, //DEFAULT now() 
      // },
      // userId:{
      //   type : Sequelize.STRING(255),
      //   allowNull: true,
      
      // }
    }, {
      sequelize,
      timestamps : true,
      underscored : false,
      modelName : "Post",
      tableName : "posts",
      paranoid : false,
      charset : "utf8",
      collate : "utf8_general_ci",
  });
}

  static associate(db){
    // db.Post.belongsTo(db.User,{foreignKey : "userId", targetKey: "id", onDelete: "CASCADE"});
    
  }

};

module.exports = Post;