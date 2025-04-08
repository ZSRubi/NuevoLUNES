// 13.	Contar regresivamente desde un número: Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número para contar regresivamente hasta 0: "));
console.log("Cuenta regresiva:");
while (numero >= 0) {
    console.log(numero);
    numero--;
}
