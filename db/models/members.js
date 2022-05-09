const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();

const Members = sequelize.define(
    'Members',
    {
        id:                    { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        member_id:             { type: DataTypes.STRING, allowNull: false },
        active:                { type: DataTypes.BOOLEAN, allowNull: false, default: 1 },
        avatar:                { type: DataTypes.STRING, allowNull: true },
        displayColor:          { type: DataTypes.INTEGER, allowNull: false },
        displayHexColor:       { type: DataTypes.STRING, allowNull: false },
        displayName:           { type: DataTypes.STRING, allowNull: true },
        joinedAt:              { type: DataTypes.DATE, allowNull: false },
        joinedTimestamp:       { type: DataTypes.STRING, allowNull: false },
        nickname:              { type: DataTypes.STRING, allowNull: true },
        premiumSince:          { type: DataTypes.DATE, allowNull: true },
        premiumSinceTimestamp: { type: DataTypes.STRING, allowNull: true },
        createdAt:             { type: DataTypes.DATE },
        updatedAt:             { type: DataTypes.DATE }
    }, {
        sequelize,
        tableName: 'Members',
    }
);

Members.associate = function (models) {
    Members.hasMany(models.Invites, { foreignKey: 'inviterId', as: 'invites' });
    Members.hasMany(models.InviteCodes, { foreignKey: 'inviterId', as: 'invitecodess' });
    // Members.belongsToMany(models.Giveaways, { through: 'GiveawayEntries', as: 'giveawaymembers', foriegnKey: 'id' });
    // Members.hasMany(models.GiveawayWinners, { foreignKey: 'memberId', as: 'membergiveawaywinners' });
};

Members.create = async function (data) {

    const member = Members.build({
        member_id: data.id,
        active: true,
        avatar: data.avatar,
        displayColor: data.displayColor,
        displayHexColor: data.displayHexColor,
        displayName: data.user.username,
        joinedAt: data.joinedAt,
        joinedTimestamp: data.joinedTimestamp,
        nickname: data.nickname,
        premiumSince: data.premiumSince,
        premiumSinceTimestamp: data.premiumSinceTimestamp
    });

    return await member.save();

};

Members.updateMember = async function (data, active = true) {

    return await Members.update({
        active: active,
        avatar: data.avatar,
        displayColor: data.displayColor,
        displayHexColor: data.displayHexColor,
        displayName: data.user.username,
        joinedAt: data.joinedAt,
        joinedTimestamp: data.joinedTimestamp,
        nickname: data.nickname,
        premiumSince: data.premiumSince,
        premiumSinceTimestamp: data.premiumSinceTimestamp
    },{
        where: { member_id: data.id }
    });


}

Members.findByMemberId = async function (memberId, includes = []) {

    return await Members.findOne({
        where: { member_id: memberId },
        include: includes
    });

};

Members.findById = async function (id, includes = []) {

    return await Members.findOne({
        where: { id: id },
        include: includes
    });

};

module.exports = Members;