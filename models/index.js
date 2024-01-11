const Sequelize = require("sequelize");

const env=process.env.NODE_ENV || 'development';
const config = require("../config/config")[env];
const db = {};


const User = require("./user");
const Post = require("./posts");
const Subclub = require("./subclub");

// const bcrypt = require("bcrypt");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);


db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Subclub = Subclub;


User.initiate(sequelize);
Post.initiate(sequelize);
Subclub.initiate(sequelize);

User.associate(db);
Post.associate(db);
Subclub.associate(db);


db.Sequelize = Sequelize;

module.exports = db;