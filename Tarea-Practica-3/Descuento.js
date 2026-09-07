// Descuento por monto de compra
// Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50, aplique 10%. En otro caso, no hay descuento.
//  Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

// Importamos el módulo readline
const readline = require("readline");

// Creamos la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos el monto de compra
rl.question("Ingrese el monto de la compra: $", function(respuesta) {

    // Convertimos la respuesta a número
    let montoCompra = Number(respuesta);

    // Declaramos las variables necesarias
    let porcentajeDescuento;
    let descuento;
    let totalPagar;

    // Aplicamos el descuento según el monto de compra
    if (montoCompra > 100) {
        porcentajeDescuento = 15;
    } 
    else if (montoCompra > 50) {
        porcentajeDescuento = 10;
    } 
    else {
        porcentajeDescuento = 0;
    }

    // Calculamos el descuento
    descuento = montoCompra * (porcentajeDescuento / 100);

    // Calculamos el total a pagar
    totalPagar = montoCompra - descuento;

    // Mostramos los resultados con dos decimales
    console.log("Monto original: $" + montoCompra.toFixed(2));
    console.log("Descuento aplicado: $" + descuento.toFixed(2));
    console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
    console.log("Total a pagar: $" + totalPagar.toFixed(2));

    rl.close();
});