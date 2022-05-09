'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Managers', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            permissionType: {
                type: Sequelize.DataTypes.ENUM('role', 'user'),
                allowNull: false
            },
            permissionId:  {
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
        return queryInterface.dropTable('Managers');
    }
};