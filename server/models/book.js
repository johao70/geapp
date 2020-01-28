const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("libro", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  autor: {
    type: Sequelize.STRING
  }
});
