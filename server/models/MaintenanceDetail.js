// Import necessary modules
const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const User = require('./User')
const Vehicle = require('./Vehicle')
const Task = require('./Task')

const MaintenanceDetail = sequelize.define(
  'MaintenanceDetails',
  {
    maintenance_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    vehicle_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: Vehicle,
        key: 'license_plate',
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    maintenance_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    maintenance_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'maintenance_details',
    timestamps: false,
  }
)

module.exports = MaintenanceDetail