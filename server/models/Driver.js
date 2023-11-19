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
    rating: {
        type: DataTypes.NUMERIC(3, 2),
        allowNull: false,
        defaultValue: 0,
    },
    n_ratings: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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