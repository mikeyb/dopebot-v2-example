'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Invites', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            inviterId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            inviteeId: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            active: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                default: 1
            },
            fake: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            },
            code: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            joinedAt: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
            },
            joinedTimestamp: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE
            }
		});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Invites');
    }
};