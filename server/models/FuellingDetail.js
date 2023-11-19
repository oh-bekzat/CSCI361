const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Vehicle = require('./Vehicle')
const Task = require('./Task')
const User = require('./User')

const FuellingDetail = sequelize.define('FuellingDetail', {
  fuelling_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vehicle_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
    references: {
      model: Vehicle,
      key: 'license_plate',
    },
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Task,
      key: 'task_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  fuelling_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fuel_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fuel_cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gas_station_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
    tableName: 'fuelling_details',
    timestamps: false,
})

module.exports = FuellingDetail
