// 10.	Tabla de multiplicar:Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.

const prompt = require('prompt-sync')();

function tablaMultiplicar() {
  const num = parseInt(prompt("Ingresa un número para su tabla de multiplicar: "));
  console.log(`Tabla de multiplicar del ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

tablaMultiplicar();
