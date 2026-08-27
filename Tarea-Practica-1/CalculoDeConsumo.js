// Tarea 3: Cálculo de Consumo de Electricidad

// Declaramos la cantidad de kilowatts consumidos durante el mes
let kilowattsConsumidos = 250;

// Declaramos el precio por cada kilowatt
const precioPorKilowatt = 0.15;

// Calculamos el costo base
let costoBase = kilowattsConsumidos * precioPorKilowatt;

// Calculamos el impuesto del 10%
let impuesto = costoBase * 0.10;

// Calculamos el costo total
let costoTotal = costoBase + impuesto;

// Mostramos la factura en la consola
console.log("===== FACTURA DE ELECTRICIDAD =====");
console.log("Kilowatts consumidos: " + kilowattsConsumidos + " kWh");
console.log("Costo base sin impuestos: $" + costoBase.toFixed(2));
console.log("Impuesto (10%): $" + impuesto.toFixed(2));
console.log("Costo total a pagar: $" + costoTotal.toFixed(2));