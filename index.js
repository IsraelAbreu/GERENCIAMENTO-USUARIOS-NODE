const express  = require('express');
const app = express();

var bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

//rotas

app.get('/', (req, res) => {
    res.render('principal');
});

app.get('/criar-user', (req, res) => {
    res.render('form-criar-usuario');
})

app.post('/salvar-usuario', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let id_permissao = req.body.id_permissao;

    console.log(nome, email, id_permissao)
})

app.get("/criar-permissao", (req, res) => {
  res.render("form-criar-permissao");
});

app.post('/salvar-permissao', (req, res) => {
    let descricao = req.body.descricao;
    console.log(descricao);
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso: http://localhost:8080");
});


