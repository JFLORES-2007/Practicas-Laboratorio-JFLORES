// Tarea 3: Simulador de cajero automático con menú
// Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
// Muestre un menú con las opciones:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Usando Switch, ejecute la opción seleccionada:
// - Opción 1: Muestre el saldo actual.
// - Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
//   y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
//   correspondiente.
// - Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
//   exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
//   el error.
// - Opción 4: Muestre "Gracias por usar el cajero" y salga.
// - Si la opción no es válida, muestre "Opción no válida".

// Importamos readline
const readline = require('readline');

// Creamos la conexión con la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Saldo inicial
let saldo = 1000;

// Mostramos el menú
console.log("===== CAJERO AUTOMÁTICO =====");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

rl.question("Seleccione una opción: ", function(opcion) {

    // Convertimos la opción a número
    opcion = parseInt(opcion);

    // Evaluamos la opción
    switch (opcion) {

        // Consultar saldo
        case 1:
            console.log("Su saldo es: $" + saldo);
            rl.close();
            break;

        // Retirar dinero
        case 2:
            rl.question("Ingrese el monto a retirar: $", function(monto) {

                monto = parseFloat(monto);

                if (monto <= 0) {
                    console.log("El monto debe ser mayor a 0");
                }
                else if (monto % 5 != 0) {
                    console.log("El monto debe ser múltiplo de 5");
                }
                else if (monto > saldo) {
                    console.log("Saldo insuficiente");
                }
                else {
                    saldo = saldo - monto;
                    console.log("Retiro exitoso");
                    console.log("Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        // Depositar dinero
        case 3:
            rl.question("Ingrese el monto a depositar: $", function(monto) {

                monto = parseFloat(monto);

                if (monto <= 0) {
                    console.log("El monto debe ser mayor a 0");
                }
                else if (monto > 5000) {
                    console.log("El depósito no puede exceder $5000");
                }
                else {
                    saldo = saldo + monto;
                    console.log("Depósito exitoso");
                    console.log("Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        // Salir
        case 4:
            console.log("Gracias por usar el cajero");
            rl.close();
            break;

        // Opción incorrecta
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
})

