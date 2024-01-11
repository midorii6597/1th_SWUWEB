const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    return super.init(
      {
        username: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        // confirm: {
        //   type: Sequelize.STRING,
        // },
        // createdAt : {
        //   type : Sequelize.DATE,
        //   allowNull : false,
        //   defaultValue : Sequelize.NOW, //DEFAULT now()
        // },
        // updatedAt:{
        //   type : Sequelize.DATE,
        //   allowNull : false,
        //   defaultValue : Sequelize.NOW, //DEFAULT now() 
        // }
      
     
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post, {
      foreignKey: "writer",
      targetKey: "id",
      onDelete: "CASCADE",
    });
    db.User.hasMany(db.Subclub, {
      foreignKey: "userId",
      targetKey: "id",
      onDelete: "CASCADE",
    });

  }
 
}

module.exports = User;