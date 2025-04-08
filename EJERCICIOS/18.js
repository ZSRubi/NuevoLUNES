// 18. Sumar hasta que el usuario ingrese 0: 093Pide números al usuario y usa while para sumarlos hasta que ingrese 0.

const prompt = require('prompt-sync')();

let sumaTotal = 0;
let numero;

do {
    numero = parseFloat(prompt("Ingresa un número (0 para terminar): "));
    sumaTotal += numero;
} while (numero !== 0);

console.log("La suma total es:", sumaTotal);
