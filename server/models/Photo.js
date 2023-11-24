const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Task = require('./Task')

const Photo = sequelize.define('Photo', {
  photo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  photo_data: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Task,
      key: 'task_id',
    },
  },
}, {
  tableName: 'photos',
  timestamps: false
})

module.exports = Photo
