'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('InviteCodes', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            inviterId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            code: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            url: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            channelId: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            uses: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                default: 0
            },
            active: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                default: 1
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
            },
            createdTimestamp: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE
            }
		});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('InviteCodes');
    }
};