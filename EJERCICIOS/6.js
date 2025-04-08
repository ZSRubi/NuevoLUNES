// 6.	Revertir un array:Implementa una función que invierta el orden de un array sin usar .reverse().

function revertirArray(arr) {
    let arrRevertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      arrRevertido.push(arr[i]);
    }
    return arrRevertido;
  }
  
  // Ejemplo de uso:
  const original = [1, 2, 3, 4, 5];
  console.log("Array revertido:", revertirArray(original));
  