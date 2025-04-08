// 1.	Sumar elementos de un array:
// Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.

function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }
  
  
  const numeros = [1, 2, 3, 4, 5];
  console.log("Suma de elementos:", sumarElementos(numeros));
  