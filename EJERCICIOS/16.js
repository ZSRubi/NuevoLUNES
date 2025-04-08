// 16. Sumar solo los números impares entre 1 y 50:
// •	Usa for para recorrer los números del 1 al 50.
// •	Usa if para sumar solo los impares.
// •	Usa while para verificar si la suma supera 500 y, si es así, detener el proceso.

let suma = 0;
let i = 1;
while (i <= 50 && suma <= 500) {
    if (i % 2 !== 0) {  // Si el número es impar
        suma += i;
    }
    i++;
}
if (suma > 500) {
    console.log("La suma superó 500 y se detuvo el proceso.");
} else {
    console.log("La suma de los números impares es:", suma);
}
