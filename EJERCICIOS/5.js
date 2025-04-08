// 5.	Buscar un elemento:Dado un array de nombres, busca si un nombre específico está en la lista y devuelve su posición.

function buscarElemento(arr, nombre) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === nombre) {
        return i;
      }
    }
    return -1; // Retorna -1 si no se encuentra el nombre
  }
  
  // Ejemplo de uso:
  const nombres = ["Ana", "Luis", "Carlos", "Marta"];
  const indice = buscarElemento(nombres, "Carlos");
  console.log("Índice de 'Carlos':", indice);
  