const express = require('express');
const { Op } = require('sequelize');
const Report = require('../models/Report');
const MaintenanceDetail = require('../models/MaintenanceDetail')
const Route = require('../models/Route')

const reportsRouter = express.Router()

reportsRouter.post('/:vehicle_id', async (req, res) => {
  try {
    const { vehicle_id } = req.params
    const { start_time, finish_time } = req.body

    if (!vehicle_id || !start_time || !finish_time) {
      return res.status(400).json({ error: 'Vehicle ID, start time, and finish time are required' });
    }

    const maintenanceDetails = await MaintenanceDetail.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('fuel_cost')), 'total_fuel'],
        [sequelize.fn('SUM', sequelize.col('maintenance_cost')), 'total_maintenance_cost'],
      ],
      where: {
        vehicle_id,
        [Op.or]: [
          { fuelling_date: { [Op.between]: [start_time, finish_time] } },
          { maintenance_date: { [Op.between]: [start_time, finish_time] } },
        ],
      },
    })

    const routeDetails = await Route.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('distance')), 'total_distance'],
      ],
      where: {
        vehicle_id,
        start_time: { [Op.between]: [start_time, finish_time] },
      },
    })

    const { total_fuel, total_maintenance_cost } = maintenanceDetails[0] || { total_fuel: 0, total_maintenance_cost: 0 };
    const { total_distance } = routeDetails[0] || { total_distance: 0 };

    const newReport = await Report.create({
      vehicle_id,
      total_fuel,
      total_maintenance_cost,
      total_distance,
      start_time,
      finish_time,
    })

    res.status(201).json(newReport)
  } catch (error) {
    console.error('Error creating report:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = reportsRouter
