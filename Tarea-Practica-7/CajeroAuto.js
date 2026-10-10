// Tarea 2: Cajero automático mejorado (DO...WHILE)
// Cree un cajero con saldo inicial de $1000. El menú debe repetirse hasta que el usuario salga:
// 1) Consultar saldo, 2) Retirar, 3) Depositar, 4) Salir.
// Valide que los retiros no excedan el saldo y que los depósitos sean mayores a 0.
// Use Switch y DO...WHILE.

import readline from "node:readline";

const Entrada = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let saldoActual = 1000;

function mostrarMenu() {
   console.log("\n=== Cajero automático ===");
   console.log("1. Consultar saldo");
   console.log("2. Retirar dinero");
   console.log("3. Depositar dinero");
   console.log("4. Salir");

   Entrada.question("Seleccione una opción: ", (opcionIngresada) => {
      const opcionSeleccionada = Number(opcionIngresada);

      switch (opcionSeleccionada) {
         case 1:
            console.log(`Su saldo actual es: $${saldoActual}`);
            mostrarMenu();
            break;
         case 2:
            Entrada.question("Ingrese el monto a retirar: ", (montoIngresado) => {
               const montoRetirar = Number(montoIngresado);

               if (isNaN(montoRetirar) || montoRetirar <= 0) {
                  console.log("El monto debe ser mayor a 0.");
               } else if (montoRetirar > saldoActual) {
                  console.log("No tiene suficiente saldo.");
               } else {
                  saldoActual -= montoRetirar;
                  console.log(`Retiro exitoso. Su saldo actual es: $${saldoActual}`);
               }

               mostrarMenu();
            });
            break;
         case 3:
            Entrada.question("Ingrese el monto a depositar: ", (montoIngresado) => {
               const montoDepositar = Number(montoIngresado);

               if (isNaN(montoDepositar) || montoDepositar <= 0) {
                  console.log("El monto debe ser mayor a 0.");
               } else {
                  saldoActual += montoDepositar;
                  console.log(`Depósito exitoso. Su saldo actual es: $${saldoActual}`);
               }

               mostrarMenu();
            });
            break;
         case 4:
            console.log("Gracias por usar el cajero automático.");
            Entrada.close();
            break;
         default:
            console.log("Opción no válida.");
            mostrarMenu();
            break;
      }
   });
}

mostrarMenu();