'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Settings', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            inviteValidAge: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                default: 3
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
        return queryInterface.dropTable('Settings');
    }
};