const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const AuctionedVehicle = require('./AuctionedVehicle')

const AuctionedVehiclePhoto = sequelize.define('AuctionedVehiclePhoto', {
    auctioned_vehicle_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: AuctionedVehicle,
        key: 'auctioned_vehicle_id',
      },
    },
    photo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photo_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
}, {
    tableName: 'auctioned_vehicles_photos',
    timestamps: false
})

module.exports = AuctionedVehiclePhoto
