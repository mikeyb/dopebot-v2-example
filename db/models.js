const Sequelize = require('sequelize');

const sequelize  = require('./db')();

const Logs      = require('./models/Logs')(sequelize, Sequelize.DataTypes)
const Guilds    = require('./models/Guilds')(sequelize, Sequelize.DataTypes)
const Members   = require('./models/Members')(sequelize, Sequelize.DataTypes)

module.exports = { Logs, Guilds, Members }