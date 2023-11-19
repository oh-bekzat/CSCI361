const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password_hashed: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255)
    },
    phone_number: {
        type: DataTypes.STRING(11),
        allowNull: false,
        validate: {
            is: /^[0-9]{11}$/i,
        }
    },
    iin: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate: {
            is: /^[0-9]{12}$/i,
        }
    },
    user_role: {
        type: DataTypes.ENUM,
        values: ['client', 'driver', 'maintenance_person', 'fuelling_person'],
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
})

module.exports = User
