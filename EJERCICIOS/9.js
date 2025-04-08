// 9.	Obtener el primer múltiplo de 5: Usa find() para hallar el primer número múltiplo de 5 en un array

function primerMultiploDe5(arr) {
    return arr.find(num => num % 5 === 0);
  }
  
  // Ejemplo de uso:
  const valores2 = [3, 7, 11, 15, 22];
  console.log("Primer múltiplo de 5:", primerMultiploDe5(valores2));
  