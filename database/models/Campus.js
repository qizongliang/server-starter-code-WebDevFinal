/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize') // Import Sequelize
const db = require('../db') // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue:
      'https://qns.com/wp-content/uploads/2021/11/QC-Rosenthal-Library.png',
  },
})

// Export the campus model
module.exports = Campus
