const express = require('express');
const app = express();
const connection = require('./database/database');
const Permissao = require('./database/Permissao');
const Usuario = require('./database/Usuario');

connection.authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!");
    })
    .catch((msgErro) => {
        console.log("Erro na conexão" + msgErro);
    });

var bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res) => {
    Usuario.findAll({
        raw: true, order: [['nome',  'DESC']]
    }).then(usuarios => {
        res.render("principal", {
            usuarios: usuarios
        });
    })
    
});

app.get('/criar-user', (req, res) => {
    Permissao.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(permissoes => {
        res.render('form-criar-usuario', { permissoes: permissoes });
    })

})

app.post('/salvar-usuario', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let id_permissao = req.body.id_permissao;

    Usuario.create({
        nome: nome,
        email: email,
        id_permissao: id_permissao
    }).then(() => {
        res.redirect('/');
    }).catch(() => {
        res.redirect('/criar-user');
    })
})

app.get("/criar-permissao", (req, res) => {
    res.render("form-criar-permissao");
});

app.post('/salvar-permissao', (req, res) => {
    let descricao = req.body.descricao;
    Permissao.create({
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    }).catch(() => {
        res.redirect('/criar-permissao');
    })
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso: http://localhost:8080");
});


