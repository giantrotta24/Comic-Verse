module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                },
                len: {
                   args: [1,140],
                   msg: "String length is not in this range"
                }
            },    
        },
        userName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                },
                len: {
                    args: [6,40],
                    msg: "Username must be at least 6 characters in length"
                }
            },
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                },
                len: {
                    args: [2,50],
                    msg: "Location must be at least 2 characters in length"
                }
            },
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Users;
};