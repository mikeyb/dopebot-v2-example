module.exports = (sequelize, DataTypes) => {

    return sequelize.define(
        'logs',
        {
            log_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            command: {
                type: DataTypes.STRING
            },
            user_id: {
                type: DataTypes.STRING
            },
            guild_id: {
                type: DataTypes.STRING
            }
        }
    );
};