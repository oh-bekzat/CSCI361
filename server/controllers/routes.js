const User = require('../models/User')
const Route = require('../models/Route')
const Admin = require('../models/Admin.js')
const Driver = require('../models/Driver.js')
const routesRouter = require('express').Router()

routesRouter.post('/', async (req, res) => {
    var randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    try {
        const { user_id, start_point, finish_point, requested_time,requested_date } = req.body
        if (!user_id || !start_point || !finish_point) {
            return res.status(400).json({ error: 'Fields are required' })
        }
        const user = await User.findByPk(user_id)
        if (!user || user.user_role !== 'client') {
            return res.status(400).json({ error: 'The specified user is not a client' })
        }
        const newRoute = await Route.create({
            client_id: user_id,
            start_point,
            finish_point,
            distance: randomValue,
            requested_time: new Date(requested_time),
            requested_date: new Date(requested_date)
        })
        res.status(201).json(newRoute)
    } catch (error) {
        console.error('Error creating route:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.get('/', async (req, res) => {
    try {
        const routes = await Route.findAll()
        res.status(200).json({ routes })
    } catch (error) {
        console.error('Error fetching routes:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.get('/requested/:user_id', async (req, res) => {
    try {

        const routes = await Route.findAll({
            where: { client_id: req.params.user_id  },
        })

        res.status(200).json({ routes })
    } catch (error) {
        console.error('Error fetching routes:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.get('/assigned/:user_id', async (req, res) => {
    try {
        const routes = await Route.findAll({
            where: { driver_id: req.params.user_id },
        })
        res.status(200).json({routes})
    } catch (error) {
        console.error('Error fetching routes:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.put('/assign/:routeId', async (req, res) => {
    try {
        const { admin_id, driver_id, license_plate } = req.body
        const { routeId } = req.params

        // if (!admin_id) {
        //     return res.status(400).json({ error: 'Admin ID is required' })
        // }

        // const admin = await Admin.findByPk(admin_id)
        // if (!admin) {
        //     return res.status(400).json({ error: 'Invalid admin ID' })
        // }

        const existingRoute = await Route.findByPk(routeId)
        if (!existingRoute) {
            return res.status(404).json({ error: 'Route not found' })
        }

        // const driver = await Driver.findByPk(driver_id);
        // if (!driver) {
        //     return res.status(400).json({ error: 'Driver not found' })
        // }

        const updatedRoute = await existingRoute.update({
            driver_id: driver_id,
            vehicle_id: license_plate,
            status: 'assigned' 
        })

        res.status(200).json(updatedRoute)
    } catch (error) {
        console.error('Error updating route:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.put('/start/:routeId', async (req, res) => {
    try {
        const { driver_id, start_time } = req.body
        const { routeId } = req.params

        const existingRoute = await Route.findByPk(routeId)
        if (!existingRoute) {
            return res.status(404).json({ error: 'Route not found' })
        }

        if (existingRoute.driver_id !== driver_id) {
            return res.status(400).json({ error: 'Driver ID does not match the existing route' })
        }

        const updatedRoute = await existingRoute.update({
            start_time: start_time,
            status: 'started' 
        })

        res.status(200).json(updatedRoute)
    } catch (error) {
        console.error('Error updating route:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.put('/cancel/:routeId', async (req, res) => {
    try {
        const { driver_id } = req.body
        const { routeId } = req.params

        const existingRoute = await Route.findByPk(routeId)
        if (!existingRoute) {
            return res.status(404).json({ error: 'Route not found' })
        }

        if (existingRoute.driver_id !== driver_id) {
            return res.status(400).json({ error: 'Driver ID does not match the existing route' })
        }

        const updatedRoute = await existingRoute.update({
            driver_id: null,
            vehicle_id: null,
            start_time: null,
            finish_time: null,
            status: 'awaiting' 
        })

        res.status(200).json(updatedRoute)
    } catch (error) {
        console.error('Error updating route:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routesRouter.put('/finish/:routeId', async (req, res) => {
    try {
        const { driver_id, finish_time } = req.body
        const { routeId } = req.params

        const existingRoute = await Route.findByPk(routeId)
        if (!existingRoute) {
            return res.status(404).json({ error: 'Route not found' })
        }

        if (existingRoute.driver_id !== driver_id) {
            return res.status(400).json({ error: 'Driver ID does not match the existing route' })
        }

        const updatedRoute = await existingRoute.update({
            finish_time: finish_time,
            status: 'completed' 
        })

        res.status(200).json(updatedRoute);
    } catch (error) {
        console.error('Error updating route:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


routesRouter.put('/rate/:driverId', async (req, res) => {
    try {
      const newRating = req.body.newRating
      const routeId = req.body.routeId
      const {driverId} = req.params
      console.log(newRating,routeId)
      const driver = await Driver.findByPk(driverId)
      if (!driver) {
        return res.status(404).json({ error: 'Driver not found' })
      }
      const existingRoute = await Route.findByPk(routeId)
      if (!existingRoute) {
        return res.status(404).json({ error: 'Route not found' })
        }

      const currentRating = driver.rating
      const numberOfRatings = driver.n_ratings
      const newAverageRating = ((parseFloat(currentRating) * numberOfRatings) + newRating) / parseFloat(numberOfRatings + 1)

      await driver.update({
        rating: newAverageRating,
        n_ratings: numberOfRatings + 1
      })

      await existingRoute.update({
        rate: newRating
      })
      res.status(200).json({ newAverageRating })
    } catch (error) {
      console.error('Error updating driver rating:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = routesRouter
