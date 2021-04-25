const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username : {
            typ: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newuserData) {
                newuserData.password = await bcrypt.hash(newuserData.password, 10);
                return newuserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },

        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;