// models/submeeting.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sequelize 인스턴스 가져오기

const submeeting = sequelize.define('submeeting', {
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
});

module.exports = submeeting;
