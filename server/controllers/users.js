const User = require('../models/User')
const usersRouter = require('express').Router()

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

usersRouter.post('/', async (req, res) => {
    try {
        const { user_role, driver_license_code, ...otherUserData } = req.body

        if (user_role === 'driver' && !driver_license_code) {
            return res.status(400).json({ error: 'License code is required for drivers' });
        }

        const newUser = await User.create({
            user_role,
            driver_license_code: user_role === 'driver' ? driver_license_code : null,
            ...otherUserData
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

usersRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) { 
            return res.status(404).json({ error: 'User not found' })
        }
        res.json(user)
    } catch (error) {
        console.error('Error fetching user:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


module.exports = usersRouter