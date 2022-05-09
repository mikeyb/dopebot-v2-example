const { Sequelize } = require('sequelize');
const config = require('../config.json')

let connection = null;

const getConnection = () => {
    if (!connection) {
        try {

            dbType = config.use_database;

            if (dbType == 'sqlite') {

                connection = new Sequelize(
                    {
                        'dialect': 'sqlite',
                        'storage': config.database[dbType].file
                    }
                );

            } else {

                connection = new Sequelize(
                    config.database.name,
                    config.database[dbType].user,
                    config.database[dbType].pass,
                    {
                        host: config.database[dbType].host,
                        port: config.database[dbType].port,
                        dialect: dbType
                    }

                );

            }

        } catch (ex) {
            console.error(__filename, ex);
            process.exit(1);
        }
    }

    return connection;
};

module.exports = { getConnection };