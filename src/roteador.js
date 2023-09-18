const express = require('express');
const rotas = express();
const {somar,multiplicar,dividir,subtrair} = require('./controladores/calculadora')

rotas.get('/somar',somar);
rotas.get('/subtrair',subtrair);
rotas.get('/multiplicar',multiplicar);
rotas.get('./dividir',dividir);

module.exports = rotas;