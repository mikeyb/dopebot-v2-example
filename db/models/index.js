const path = require('path');
const fs = require('fs');
const db = require('../index');
const models = {};

module.exports = (() => {

    if (!Object.keys(models).length) {
        const sequelize = db.getConnection();
        const files = [
            'inviteCodes',
            'invites',
            'managers',
            'members',
            'settings'
        ];
        const excludedFiles = ['.', '..', 'index.js'];

        for (const fileName of files) {
            const modelFile = require(path.join(__dirname, fileName));
            models[modelFile.getTableName()] = modelFile;
        }

        Object
            .values(models)
            .forEach(model => {
                if (typeof model.associate === 'function') {
                    model.associate(models);
                }
            });

        models.sequelize = sequelize;
    }

    return models;

})();