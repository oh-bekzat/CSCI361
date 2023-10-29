const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Vehicle = sequelize.define('Vehicle', {
    license_plate: {
        type: DataTypes.STRING(255),
        primaryKey: true,
    },
    make: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    manufacture_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isWithinLast30Years(value) {
                const currentYear = new Date().getFullYear()
                if (value < currentYear - 30 || value > currentYear) {
                    throw new Error('Manufacture year should be no older than 30 years from now and not in the future.')
                }
            }
        }
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fuel_volume: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    tank_volume: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    last_fueled_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    last_maintained_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
}, {
    tableName: 'vehicles',
    timestamps: false,
})

module.exports = Vehicle
