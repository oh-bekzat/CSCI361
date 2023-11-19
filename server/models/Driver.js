const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const User = require('./User')

const Driver = sequelize.define('Driver', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    license_code: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        unique: true,
        validate: {
            is: /^[0-9]{6}$/i,
        }
    }
}, {
    tableName: 'drivers',
    timestamps: false
})

module.exports = Driver