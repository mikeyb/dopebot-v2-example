'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('PinnedMessages', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            pinnedType: {
                type: Sequelize.DataTypes.ENUM('inviteleaderboard'),
                allowNull: false
            },
            channelId: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            messageId: {
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
        return queryInterface.dropTable('InviteLeaderboards');
    }
};