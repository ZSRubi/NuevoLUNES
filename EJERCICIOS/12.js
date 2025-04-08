// 12.	Adivinar un número:Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.

const prompt = require('prompt-sync')(); // Asegúrate de tener prompt-sync instalado

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while (intento !== numeroSecreto) {
    intento = parseInt(prompt("Adivina el número (entre 1 y 10): "));
    if (intento !== numeroSecreto) {
        console.log("¡Incorrecto! Intenta otra vez.");
    }
}
console.log("¡Correcto! Adivinaste el número secreto.");
