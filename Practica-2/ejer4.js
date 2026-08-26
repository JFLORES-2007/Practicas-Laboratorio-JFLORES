// Fecha actual: Obtenga la fecha actual y muestre el día, mes y año de forma personalizada (Ej: 26/8/2026).
let fecha = new Date()

let dia = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getUTCFullYear();

console.log(`la fecha actual es: ${dia}/${mes}/${año}`);

