module.exports = (sequelize, DataTypes) => {

    return sequelize.define(
        'guilds',
        {
            guild_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: 1
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            createdTimestamp: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            joinedAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            joinedTimestamp: {
                type: DataTypes.STRING,
                allowNull: false
            },
            large: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: 0
            },
            memberCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                default: 0
            },
            ownerId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            partnered: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: 0
            },
            preferredLocal: {
                type: DataTypes.STRING,
                allowNull: false,
                default: 'en-US'
            },
            premiumSubscriptionCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                default: 0
            },
            premiumTier: {
                type: DataTypes.STRING,
                allowNull: false,
                default: 'NONE'
            },
            publicUpdatesChannelId: {
                type: DataTypes.STRING,
                allowNull: true
            },
            rulesChannelId: {
                type: DataTypes.STRING,
                allowNull: true
            },
            systemChannelId: {
                type: DataTypes.STRING,
                allowNull: true
            },
            vanityURLCode: {
                type: DataTypes.STRING,
                allowNull: true
            },
            verificationLevel: {
                type: DataTypes.STRING,
                allowNull: false,
                default: 'NONE'
            },
            verified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: 0
            }
        }
    );
}