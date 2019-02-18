module.exports = function(sequelize, DataTypes) {
    const Villains = sequelize.define("Villains", {
        name: DataTypes.STRING,
        secretIdentity: DataTypes.STRING,
        earlyLife: DataTypes.TEXT,
        currentHistory: DataTypes.TEXT,
        personalLife: DataTypes.TEXT,
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Villains;
};
