const bodyParser = require('body-parser');
const express = require('express');

const connection = require('./database/database');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    })
    .catch(error => {
        console.log('Erro ao conectar com a base', error);
    });

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(8080, error => {
    if (error)
        console.log('Erro ao levantar servidor:', error);
    else
        console.log('O servidor está rodando!');
})