module.exports = (sequelize, DataTypes) => {

	return sequelize.define(
		'members',
		{
			member_id: {
				type: DataTypes.STRING,
				primaryKey: true
			},
			guild_id: {
				type: DataTypes.STRING,
				allowNull: false
			},
			avatar: {
				type: DataTypes.STRING,
				allowNull: true
			},
			displayColor: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			displayHexColor: {
				type: DataTypes.STRING,
				allowNull: false
			},
			displayName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			joinedAt: {
				type: DataTypes.DATE,
				allowNull: false
			},
			joinedTimestamp: {
				type: DataTypes.STRING,
				allowNull: false
			},
			nickname: {
				type: DataTypes.STRING,
				allowNull: false
			},
			premiumSince: {
				type: DataTypes.DATE,
				allowNull: false
			},
			premiumSinceTimestamp: {
				type: DataTypes.STRING,
				allowNull: false
			}

		}

	);
}