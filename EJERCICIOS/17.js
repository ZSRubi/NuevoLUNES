// 17.Contador de intentos: Simula un intento de login. Usa while para permitir 3 intentos.

const prompt = require('prompt-sync')();

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";
let intentos = 0;
let loginExitoso = false;

while (intentos < 3 && !loginExitoso) {
    let usuario = prompt("Ingresa el usuario: ");
    let contrasena = prompt("Ingresa la contraseña: ");
    
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        console.log("¡Login exitoso!");
        loginExitoso = true;
    } else {
        console.log("Datos incorrectos. Intenta de nuevo.");
        intentos++;
    }
}

if (!loginExitoso) {
    console.log("Has superado el número de intentos permitidos.");
}
