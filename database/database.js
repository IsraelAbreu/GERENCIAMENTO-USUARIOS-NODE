const Sequelize = require('sequelize');
const connection = new Sequelize('gerencia-usuarios', 'root', '123', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

module.exports = connection;