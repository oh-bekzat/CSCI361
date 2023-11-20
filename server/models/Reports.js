const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Driver = require('./Driver')

const Report = sequelize.define('Report', {
    report_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Driver,
        key: 'user_id',
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
    tableName: 'drivers',
    timestamps: false
})

module.exports = Report