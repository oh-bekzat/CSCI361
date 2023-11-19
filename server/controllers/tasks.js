const express = require('express')
const Task = require('../models/Task')
const Admin = require('../models/Admin')
const User = require('../models/User')
const MaintenanceDetail = require('../models/MaintenanceDetail')
const FuellingDetail = require('../models/FuellingDetail')
const Photo = require('../models/Photo')

const tasksRouter = express.Router()

tasksRouter.post('/', async (req, res) => {
  try {
    const { admin_id, description, task_type, assignee_id, date, vehicle_id } = req.body

    if (!description || !task_type || !assignee_id || !date || !vehicle_id) {
      return res.status(400).json({ error: 'Fields are required' })
    }

    const assigneeExists = await User.findByPk(assignee_id)
    if (!assigneeExists) {
      return res.status(400).json({ error: 'Assignee not found' })
    }

    const admin = await Admin.findByPk(admin_id)
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const newTask = await Task.create({
      description: description,
      task_type: task_type,
      assignee_id: assignee_id,
      date: date,
      status: 'assigned',
      vehicle_id: vehicle_id
    })

    res.status(201).json(newTask)
  } catch (error) {
    console.error('Error creating task:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

tasksRouter.put('/maintenance/:taskId', async (req, res) => {
    try {
      const { user_id, maintenance_description, maintenance_date, maintenance_cost, images } = req.body
      const { taskId } = req.params

      const existingTask = await Task.findByPk(taskId)
      if (!existingTask) {
        return res.status(404).json({ error: 'Task not found' })
      }

      if (existingTask.assignee_id !== user_id) {
        return res.status(400).json({ error: 'User ID does not match the assignee of the existing task' })
      }
  
      await existingTask.update({ status: 'completed' })
  
      const newMaintenanceDetail = await MaintenanceDetail.create({
        task_id: taskId,
        user_id,
        vehicle_id: existingTask.vehicle_id,
        description: maintenance_description,
        maintenance_date,
        maintenance_cost,
      })

      if (images && images.length > 0) {
        const photoPromises = images.map(async (imageData) => {
          return await Photo.create({
            task_id: taskId,
            photo_data: imageData,
          })
        })
  
        await Promise.all(photoPromises)
      }
  
      res.status(200).json({ task: existingTask, maintenance_details: newMaintenanceDetail })
    } catch (error) {
      console.error('Error updating task and creating maintenance details:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
})

tasksRouter.put('/fuelling/:taskId', async (req, res) => {
    try {
      const { user_id, fuel_cost, fuelling_date, fuel_amount, gas_station_name, images } = req.body
      const { taskId } = req.params

      const existingTask = await Task.findByPk(taskId)
      if (!existingTask) {
        return res.status(404).json({ error: 'Task not found' })
      }

      if (existingTask.assignee_id !== user_id) {
        return res.status(400).json({ error: 'User ID does not match the assignee of the existing task' })
      }
  
      await existingTask.update({ status: 'completed' })
  
      const newFuellingDetail = await FuellingDetail.create({
        user_id: user_id,
        task_id: taskId,
        vehicle_id: existingTask.vehicle_id,
        fuel_cost,
        fuelling_date,
        fuel_amount,
        gas_station_name
      })

      if (images && images.length > 0) {
        const photoPromises = images.map(async (imageData) => {
          return await Photo.create({
            task_id: taskId,
            photo_data: imageData,
          })
        })
        await Promise.all(photoPromises)
      }
  
      res.status(200).json({ task: existingTask, fuelling_details: newFuellingDetail })
    } catch (error) {
      console.error('Error updating task and creating fuelling details:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = tasksRouter