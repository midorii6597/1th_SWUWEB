const { Sequelize, DataTypes } = require("sequelize");

class Meeting extends Sequelize.Model {
  static initiate(sequelize) {
    Meeting.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        // Uncomment the following if you want to include createdAt, updatedAt, and userId fields
        // createdAt: {
        //   type: DataTypes.DATETIME,
        //   allowNull: false,
        //   defaultValue: Sequelize.NOW, // DEFAULT now()
        // },
        // updatedAt: {
        //   type: DataTypes.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.NOW, // DEFAULT now()
        // },
        // userId: {
        //   type: DataTypes.STRING(255),
        //   allowNull: true,
        // },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Meeting",
        tableName: "meetings", // 수정: 테이블 이름을 "meetings"로 지정
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    // Uncomment and modify the following line if you have a User model and want to set up an association
    // db.Meeting.belongsTo(db.User, { foreignKey: "userId", targetKey: "id", onDelete: "CASCADE" });
  }
}

module.exports = Meeting;

