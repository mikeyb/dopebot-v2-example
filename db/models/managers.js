const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();

const Managers = sequelize.define(
    'Managers',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        permissionType: { type: DataTypes.ENUM('role', 'user') },
        permissionId:   { type: DataTypes.STRING },
        createdAt:      { type: DataTypes.DATE },
        updatedAt:      { type: DataTypes.DATE }
    }, {
        sequelize,
        tableName: 'Managers',
    }

);

Managers.associate = function (models) {

};

Managers.create = async function (type, permissionId) {

    const guildManager = GuildManagers.build({
        permissionType: type,
        permissionId: permissionId
    });

    return await guildManager.save();

};

Managers.countManagers = async function (type, permissionId) {

    return await GuildManagers.count({
        where: {
            permissionType: type,
            permissionId: permissionId
        }
    });

};

Managers.destroyManager = async function (type, permissionId) {

    manager = await GuildManagers.findGuildManager(type, permissionId);

    if (manager) return await manager.destroy();

};

Managers.findManagerByTypeAndId = async function (type, permissionId) {

    return await GuildManagers.findOne({
        where: {
            permissionType: type,
            permissionId: permissionId
        }
    });

};

module.exports = Managers;