// 11.	Generar una secuencia de Fibonacci:Usa un for para generar los primeros 10 números de la serie de Fibonacci e imprímelos.

let n1 = 0;
let n2 = 1;

console.log("Secuencia de Fibonacci:");
for (let i = 0; i < 10; i++) {
    console.log(n1);
    let siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;
}
