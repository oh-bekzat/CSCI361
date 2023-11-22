const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User')
const Driver = require('./Driver')
const Vehicle = require('./Vehicle')

const Route = sequelize.define('Route', {
    route_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    driver_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: 'user_id',
        },
    },
    vehicle_id: {
        type: DataTypes.STRING(255),
        references: {
            model: Vehicle,
            key: 'license_plate',
        },
    },
    start_point: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    finish_point: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
    },
    finish_time: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.ENUM('awaiting', 'assigned', 'started', 'completed'),
        defaultValue: 'awaiting',
    },
    requested_time: {
        type: DataTypes.DATE,
    },
    requested_date: {
        type: DataTypes.DATE,
    },
    driver_id: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'routes',
    timestamps: false,
});

module.exports = Route