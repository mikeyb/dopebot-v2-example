const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();

const Settings = sequelize.define(
    'Settings',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        inviteValidAge: { type: DataTypes.INTEGER, allowNull: false, default: 3 },
        createdAt:      { type: DataTypes.DATE },
        updatedAt:      { type: DataTypes.DATE }
    }, {
        sequelize,
        tableName: 'Settings',
    }

);

Settings.associate = function (models) {

};

Settings.create = async function (type, permissionId) {

    const settings = Settings.build({
        inviteValidAge: 3
    });

    return await settings.save();

};

Settings.getSettings = async function () {

    return await Settings.findOne({
        where: { id: 0 }
    });

};

module.exports = Settings;