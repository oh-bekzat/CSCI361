const express = require('express');
const sequelize = require('../database');
const { fn, col, literal, Op } = require('sequelize');
const Report = require('../models/Report');
const MaintenanceDetail = require('../models/MaintenanceDetail');
const FuellingDetail = require('../models/FuellingDetail');
const Route = require('../models/Route');
const Vehicle = require('../models/Vehicle')
const PDFDocument = require('pdfkit')

const reportsRouter = express.Router();

reportsRouter.post('/:vehicle_id', async (req, res) => {
  try {
    const { vehicle_id } = req.params;
    const { start_time, finish_time } = req.body;

    if (!vehicle_id || !start_time || !finish_time) {
      return res.status(400).json({ error: 'Vehicle ID, start time, and finish time are required' });
    }

    const vehicle = await Vehicle.findOne({
        attributes: ['make', 'model'], // Adjust this based on your Vehicle model
        where: {
          license_plate: vehicle_id,
        },
    })

    const fuelDetails = await FuellingDetail.findAll({
      attributes: [
        [sequelize.literal('SUM(COALESCE("fuel_cost", 0))'), 'total_fuel'],
      ],
      where: {
        vehicle_id,
        fuelling_date: {
          [Op.and]: {
            [Op.gt]: start_time,
            [Op.lt]: finish_time,
          },
        },
      },
    });

    const maintenanceDetails = await MaintenanceDetail.findAll({
      attributes: [
        [sequelize.literal('SUM(COALESCE("maintenance_cost", 0))'), 'total_maintenance_cost'],
      ],
      where: {
        vehicle_id,
        maintenance_date: {
          [Op.and]: {
            [Op.gt]: start_time,
            [Op.lt]: finish_time,
          },
        },
      },
    });

    const routeDetails = await Route.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.literal('COALESCE("distance", 0)')), 'total_distance'],
      ],
      where: {
        vehicle_id,
        start_time: {
          [Op.and]: {
            [Op.gt]: start_time,
            [Op.lt]: finish_time,
          },
        },
        status: 'completed'
      },
    });

    const total_fuel = fuelDetails[0]?.dataValues.total_fuel || 0;
    const total_maintenance_cost = maintenanceDetails[0]?.dataValues.total_maintenance_cost || 0;
    const total_distance = routeDetails[0]?.dataValues.total_distance || 0;

    const newReport = await Report.create({
      vehicle_id,
      total_fuel,
      total_maintenance_cost,
      total_distance,
      start_time,
      finish_time,
    });

    await newReport.save()
    console.log(vehicle)
    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(12).text(`Vehicle Report on ${vehicle?.dataValues.make} ${vehicle?.dataValues.model} with a license plate ${vehicle_id}`);
    doc.fontSize(12).text('Fuel Details:')
    doc.text(`Total fueling costs: ${total_fuel}`);
    doc.text(`Total maintenance costs: ${total_maintenance_cost}`);
    doc.text(`Total distance driven: ${total_distance}`);
    doc.text(`Report generated for time interval: ${start_time} - ${finish_time}`);

    doc.end();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ error: 'Internal server error' })
  }
});

module.exports = reportsRouter;
