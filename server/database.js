const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('vms', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = sequelize