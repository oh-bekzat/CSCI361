const Vehicle = require('../models/Vehicle')
const AuctionedVehicle = require('../models/AuctionedVehicle')
const AuctionedVehiclePhoto = require('../models/AuctionedVehiclePhoto')
const Admin = require('../models/Admin')
const auctionRouter = require('express').Router()

auctionRouter.get('/', async (req, res) => {
    try {
        const auctions = await AuctionedVehicle.findAll()
        res.status(200).json({ auctions });
    } catch (error) {
        console.error('Error fetching auctions:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

auctionRouter.get('/:vehicleId', async (req, res) => {
    try {
        const { vehicleId } = req.params
        const photos = await AuctionedVehiclePhoto.findAll({
            where: { auctioned_vehicle_id: vehicleId },
            attributes: ['photo_url'],
        })
        const auctions = await AuctionedVehicle.findOne({where: {auctioned_vehicle_id: vehicleId}})
        res.status(200).json({ auctions, photos })
    } catch (error) {
        console.error('Error fetching auction photos:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

auctionRouter.post('/', async (req, res) => {
    try {
      const { admin_id, vehicle_id, vehicle_cost, description, photos } = req.body
  
      const existingVehicle = await Vehicle.findOne({ where: { license_plate: vehicle_id } })
      if (!existingVehicle) {
        return res.status(400).json({ error: 'Vehicle not found' })
      }
  
      // const admin = await Admin.findByPk(admin_id);
      // if (!admin) {
      //   return res.status(401).json({ error: 'Unauthorized' })
      // }
  
      const auctionedVehicle = await AuctionedVehicle.create({
        auctioned_vehicle_id: vehicle_id,
        vehicle_cost,
        description,
      })
  
      const photoPromises = photos.map(async (photoUrl) => {
        return await AuctionedVehiclePhoto.create({
          auctioned_vehicle_id: vehicle_id,
          photo_url: photoUrl,
        })
      })
  
      await Promise.all(photoPromises)
  
      res.status(201).json({ auctionedVehicle })
    } catch (error) {
      console.error('Error creating auction:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = auctionRouter
