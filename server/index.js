const express = require('express')
const app = express()
const sequelize = require('./database')
const User = require('./models/User')
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/users', async (request, response) => {
    try {
        const users = await User.findAll()
        response.json(users)
    } catch (err) {
        response.status(500).send(err.message)
    }
})

app.post('/api/users', async (request, response) => {
  const userData = request.body
  console.log(request.body)
  try {
      const newUser = await User.create(userData)
      response.status(201).json(newUser)
  } catch (err) {
      response.status(400).send(err.message)
  }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

    sequelize.authenticate()
        .then(() => {
            console.log('Database connected.')
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err)
        })
})
