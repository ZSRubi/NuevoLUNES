// 8.	Sumar solo los números positivos: Filtra los negativos y suma los positivos.

function sumarPositivos(arr) {
    let suma = 0;
    for (let num of arr) {
      if (num > 0) {
        suma += num;
      }
    }
    return suma;
  }
  
  
  const nums = [-10, 20, -5, 15, -2];
  console.log("Suma de positivos:", sumarPositivos(nums));
  