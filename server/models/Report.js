const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Vehicle = require('./Vehicle')

const Report = sequelize.define('Report', {
    report_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicle_id: {
        type: DataTypes.STRING(255),
        references: {
            model: Vehicle,
            key: 'license_plate',
        },
    },
    total_distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
    },
    finish_time: {
        type: DataTypes.DATE,
    },
    total_maintenance_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_fuel: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
}, {
    tableName: 'reports',
    timestamps: false
})

module.exports = Report