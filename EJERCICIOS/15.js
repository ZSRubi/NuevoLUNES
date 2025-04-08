// 15.	Mostrar menú hasta que el usuario salga: Muestra un menú con opciones y usa do while para repetir hasta que el usuario elija salir

const prompt = require('prompt-sync')();

let opcion;
do {
    console.log("\nMenú:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    opcion = prompt("Elige una opción: ");
    
    switch(opcion) {
        case "1":
            console.log("Elegiste Opción 1");
            break;
        case "2":
            console.log("Elegiste Opción 2");
            break;
        case "3":
            console.log("Saliendo del menú...");
            break;
        default:
            console.log("Opción inválida, intenta de nuevo.");
    }
} while (opcion !== "3");
