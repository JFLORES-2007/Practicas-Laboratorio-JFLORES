// Tarea 2: Conversión de Monedas

// Declaramos la cantidad de dinero en dólares estadounidenses
let dolares = 100;

// Convertimos dólares a euros
let euros = dolares * 0.92;

// Convertimos dólares a pesos salvadoreños
let DolarSalvadorenos = dolares * 8.75;

// Convertimos dólares a quetzales guatemaltecos
let quetzales = dolares * 7.80;

// Mostramos todas las conversiones en la consola
console.log("Cantidad inicial: $" + dolares + " USD");
console.log("Euros (EUR): €" + euros.toFixed(2));
console.log("Dolar salvadoreños (SVC): ₡" + DolarSalvadorenos.toFixed(2));
console.log("Quetzales guatemaltecos (GTQ): Q" + quetzales.toFixed(2));