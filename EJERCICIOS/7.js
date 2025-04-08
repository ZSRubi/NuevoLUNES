// 7.	Convertir nombres a mayúsculas:  Dado un array de nombres, usa map() para convertirlos todos a mayúsculas.

function nombresMayusculas(arr) {
    return arr.map(nombre => nombre.toUpperCase());
  }
  
  // Ejemplo de uso:
  const nombresPeque = ["ana", "luis", "carlos"];
  console.log("Nombres en mayúsculas:", nombresMayusculas(nombresPeque));
  