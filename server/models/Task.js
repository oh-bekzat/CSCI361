
const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Vehicle = require('./Vehicle')
const User = require('./User')

const Task = sequelize.define('Task', {
  task_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  task_type: {
    type: DataTypes.ENUM('maintenance', 'fuelling'),
    allowNull: false,
  },
  assignee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('assigned', 'taken', 'completed'),
    allowNull: false,
  },
  vehicle_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
    references: {
      model: Vehicle,
      key: 'license_plate',
    },
  },
}, {
    tableName: 'tasks',
    timestamps: false
})

module.exports = Task
