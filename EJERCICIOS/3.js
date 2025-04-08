// 3.	Contar elementos pares: Dado un array de números, cuenta cuántos son pares y devuelve el total.

function contarPares(arr) {
    let contador = 0;
    for (let num of arr) {
      if (num % 2 === 0) {
        contador++;
      }
    }
    return contador;
  }
  
  // Ejemplo de uso:
  const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("Cantidad de números pares:", contarPares(listaNumeros));
  