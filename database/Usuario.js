const Sequelize = require('sequelize');
const connection = require('./database');

const Usuario = connection.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_permissao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Usuario.sync({ force: false }).then(() => {
    console.log("Tebela de usuários criada com sucesso!")
})

module.exports = Usuario;