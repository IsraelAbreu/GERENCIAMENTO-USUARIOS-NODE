const Sequelize = require('sequelize');
const connection = require('./database');

const Permissao = connection.define('permissao', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

Permissao.sync({ force: false }).then(() => {
    console.log("Tabela de permissões criada com sucesso!");
})

module.exports = Permissao