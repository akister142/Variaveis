const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = 'Matheus Aliski'
let idade = 17;
const cursoFaculdade = 'me matar'
let cidadeAtual = 'SJP';

console.log(`Ola eu sou o '${nomeCompleto} 'eu tenho '$(idade) "moro em" ${cidadeAtual}; quero`);
console.log(anoAtual);

anoAtual = 2025;

console.log(anoAtual);

//agencia de viagens 

var nomeComprador = entrada('qual seu nome?');
var cpf = entrada('Qual o seu cpf?');
var idadeComprador = entrada('Qual é a sua idade?');
const listaDeDestinos = new  Array(
  "Joinville",
  " Florianṕolis",
  " João Pessoa",
  " Osasco",
  " Lages",
);

console.log (`Olá senhor ${nomeComprador}, seu cpf é ${cpf} e idade ${idadeComprador}, certo? Sua viagem está reservada, com os seguintes destinos planejados: ${listaDeDestinos}´);

console.log (listaDeDestinos[2]);
console.log("");
  
console.log(´Boa noite robson, nós temos um novo destino adicionado à sua viagem`);

listaDeDestinos.push("Rio de Janeiro");

console.log(listaDeDestinos);


if(idadeComprador<18){
  console.log(`infelizmente nao podemos te vender uma passagem pois o senhor (a) é menor de idade`)
}