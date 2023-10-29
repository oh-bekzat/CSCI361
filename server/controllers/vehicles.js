const Vehicle = require('../models/Vehicle')
const vehiclesRouter = require('express').Router()

vehiclesRouter.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll()
        res.json(vehicles)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

vehiclesRouter.post('/', async (req, res) => {
    const vehicleData = req.body

    try {
        const newVehicle = await Vehicle.create(vehicleData)
        res.status(201).json(newVehicle)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

vehiclesRouter.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.id)
        if (!vehicle) { 
            return res.status(404).json({ error: 'Vehicle not found' })
        }
        res.json(vehicle)
    } catch (error) {
        console.error('Error fetching vehicle:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


module.exports = vehiclesRouter