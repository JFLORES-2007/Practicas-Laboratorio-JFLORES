// Tarea 1: Adivinar el número secreto (WHILE)
// Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1. Usando un bucle WHILE, 
// solicite al usuario adivinar el número. En cada intento, indique si el número es mayor o menor que el secreto. 
// Cuente los intentos y muéstrelos al final.

import readline from "node:readline";

const entrada = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let cantidadIntentos = 0;

function adivinar() {
   entrada.question("Adivina el número secreto (1 - 50): ", (respuestaUsuario) => {
      const numeroIngresado = Number(respuestaUsuario);

      if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50) {
         console.log("Ingresa un número válido entre 1 y 50.");
         adivinar();
         return;
      }

      cantidadIntentos++;

      if (numeroIngresado < numeroSecreto) {
         console.log("El número secreto es MAYOR.");
         adivinar();
      } else if (numeroIngresado > numeroSecreto) {
         console.log("El número secreto es MENOR.");
         adivinar();
      } else {
         console.log("¡Correcto! Adivinaste el número.");
         console.log("Número de intentos:", cantidadIntentos);
         entrada.close();
      }
   });
}

adivinar();