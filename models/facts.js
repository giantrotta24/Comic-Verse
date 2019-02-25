module.exports = (sequelize, DataTypes) => {
    const Facts = sequelize.define('facts_lists', {
        title: DataTypes.TEXT,
        facts: DataTypes.TEXT,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    return Facts;
};
