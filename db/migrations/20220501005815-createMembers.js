'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Members', {
                id: {
                    type: Sequelize.DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                member_id: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false
                },
                active: {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                    default: 1
                },
                avatar: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: true
                },
                displayColor: {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false
                },
                displayHexColor: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false
                },
                displayName: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: true
                },
                joinedAt: {
                    type: Sequelize.DataTypes.DATE,
                    allowNull: false
                },
                joinedTimestamp: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false
                },
                nickname: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: true
                },
                premiumSince: {
                    type: Sequelize.DataTypes.DATE,
                    allowNull: true
                },
                premiumSinceTimestamp: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: true
                },
                createdAt: {
                    type: Sequelize.DataTypes.DATE
                },
                updatedAt: {
                    type: Sequelize.DataTypes.DATE
                }
    		}
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Members');
    }
};