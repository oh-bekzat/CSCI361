const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Admin = sequelize.define('Administrator', {
    admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    password_hashed: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'administrators',
    timestamps: false,
})

module.exports = Admin
