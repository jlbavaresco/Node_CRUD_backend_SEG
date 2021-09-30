const express = require('express')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const controleEstado = require("./controladores/estados");
const controleCidade = require("./controladores/cidades");
const controlePessoa = require("./controladores/pessoas");
const controleTelefone = require("./controladores/telefones");
const controleUsuario = require("./controladores/usuarios")

app
    .route('/api/estados')
    .get(controleUsuario.verificaJWT, controleEstado.getEstados)
    .post(controleUsuario.verificaJWT, controleEstado.addEstado)
    .put(controleUsuario.verificaJWT, controleEstado.updateEstado)
app.route('/api/estados/:codigo')
    .get(controleUsuario.verificaJWT, controleEstado.getEstadoPorID)
    .delete(controleUsuario.verificaJWT, controleEstado.deleteEstado)
app
    .route('/api/cidades')
    .get(controleUsuario.verificaJWT, controleCidade.getCidades)
    .post(controleUsuario.verificaJWT, controleCidade.addCidade)
    .put(controleUsuario.verificaJWT, controleCidade.updateCidade)
app.route('/api/cidades/:codigo')
    .get(controleUsuario.verificaJWT, controleCidade.getCidadePorID)
    .delete(controleUsuario.verificaJWT, controleCidade.deleteCidade)
app
    .route('/api/pessoas')
    .get(controleUsuario.verificaJWT, controlePessoa.getPessoas)
    .post(controleUsuario.verificaJWT, controlePessoa.addPessoa)
    .put(controleUsuario.verificaJWT, controlePessoa.updatePessoa)
app.route('/api/pessoas/:codigo')
    .get(controleUsuario.verificaJWT, controlePessoa.getPessoaPorID)
    .delete(controleUsuario.verificaJWT, controlePessoa.deletePessoa) 

app
    .route('/api/telefones')
    .post(controleUsuario.verificaJWT, controleTelefone.addTelefone)
    .put(controleUsuario.verificaJWT, controleTelefone.updateTelefone)
app.route('/api/telefones/:codigopessoa')
    .get(controleUsuario.verificaJWT, controleTelefone.getTelefones)
app.route('/api/telefones/:codigo')   
    .delete(controleUsuario.verificaJWT, controleTelefone.deleteTelefone) 
app.route('/api/telefone/:codigo') 
    .get(controleUsuario.verificaJWT, controleTelefone.getTelefonePorID)    
    
    
app
    .route("/api/login")
    .post(controleUsuario.login)       


app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando a API');
})
