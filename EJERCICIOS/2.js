// 2.	Número mayor y menor: Crea una función que reciba un array de números y retorne el mayor y el menor.


function mayorYMenor(arr) {
    if (arr.length === 0) return null; 
    let mayor = arr[0];
    let menor = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) mayor = arr[i];
      if (arr[i] < menor) menor = arr[i];
    }
    return { mayor, menor };
  }
  
  // Ejemplo de uso:
  const valores = [10, 3, 25, 7, 1];
  const { mayor, menor } = mayorYMenor(valores);
  console.log("Mayor:", mayor, "Menor:", menor);
  