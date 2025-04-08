// 4.	Ordenar un array: Implementa un algoritmo que ordene un array de números de menor a mayor sin usar .sort().

function ordenarArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar elementos
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Ejemplo de uso:
  const desordenado = [5, 2, 9, 1, 5, 6];
  console.log("Array ordenado:", ordenarArray(desordenado));
  