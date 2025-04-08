// 14.	Validar entrada de usuario: Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.

const prompt = require('prompt-sync')();

let numero;
do {
    numero = parseInt(prompt("Ingresa un número mayor que 0: "));
} while (isNaN(numero) || numero <= 0);

console.log(`Número válido ingresado: ${numero}`);
