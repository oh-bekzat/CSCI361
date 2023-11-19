const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const AuctionedVehicle = sequelize.define('AuctionedVehicle', {
  auctioned_vehicle_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  vehicle_cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'auctioned_vehicles',
  timestamps: false
})

module.exports = AuctionedVehicle
