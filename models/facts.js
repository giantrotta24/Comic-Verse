module.exports = (sequelize, DataTypes) => {
    const Facts = sequelize.define("Facts", {
        title: DataTypes.TEXT,
        fact: DataTypes.TEXT,
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