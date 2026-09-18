// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".
import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Pedimos los numeros
rl.question('Ingrese el número a: ', (a) => {
    rl.question('Ingrese el número b: ', (b) => {
        rl.question('Ingrese el número c: ', (c) => {

            // Convertimos los datos a números
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            // Comprobamos si los tres números son iguales
            if (a === b && b === c) {
                console.log('Los tres números son iguales');
            }

            // Comprobamos si los tres números son diferentes
            else if (a !== b && a !== c && b !== c) {
                console.log('Los tres números son diferentes');
            }

            // Si no son todos iguales ni todos diferentes, significa que exactamente dos son iguales
            else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
                console.log('Hay dos números iguales');
            }
            // Determinamos cuál es el número mayor
            if (a >= b && a >= c) {
                console.log(`El número mayor es: ${a}`);
            }
            else if (b >= a && b >= c) {
                console.log(`El número mayor es: ${b}`);
            }
            else {
                console.log(`El número mayor es: ${c}`);
            }

            // Determinamos cuál es el número menor
            if (a <= b && a <= c) {
                console.log(`El número menor es: ${a}`);
            }
            else if (b <= a && b <= c) {
                console.log(`El número menor es: ${b}`);
            }
            else {
                console.log(`El número menor es: ${c}`);
            }

            // Comprobamos si alguno de los números es negativo
            if (a < 0 || b < 0 || c < 0) {
                console.log('Hay números negativos');
            }
            rl.close();
        });
    });
});