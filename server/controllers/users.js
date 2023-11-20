const User = require('../models/User')
const Driver = require('../models/Driver')
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
        const { user_role, license_code, ...otherUserData } = req.body

        if (user_role === 'driver' && !license_code) {
            return res.status(400).json({ error: 'Driver license code is required for drivers' })
        }

        const newUser = await User.create({
            user_role,
            ...otherUserData
        })

        if (user_role === 'driver') {
            await Driver.create({
                user_id: newUser.user_id,
                license_code: license_code
            })
        }

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
})


usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: username,
                password_hashed: password
            }
        })
        if (!user) { 
            return res.status(401).json({ error: 'User not found' })
        }
        res.status(201).json({
            userId: user.user_id,
            user_role: user.user_role,
          });
    } catch (error) {
        console.error('Error fetching user:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
  });

usersRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) { 
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(203).json(user)
    } catch (error) {
        console.error('Error fetching user:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = usersRouter