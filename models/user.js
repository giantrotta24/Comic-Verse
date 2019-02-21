module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
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
        username: {
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
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE
        }, 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};