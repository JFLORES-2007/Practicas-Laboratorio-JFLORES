// Tarea 1: Acumulación con reduce
// Cree un arreglo con las notas de un estudiante 
// (por ejemplo: 8, 7, 9, 6, 10). 
// Utilice el método reduce para calcular el promedio de las notas. 
// Muestre el resultado en consola con 2 decimales.

const notas = [8, 7, 9, 6, 10];

const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);

const promedio = suma / notas.length;

console.log("Notas del estudiante:", notas);
console.log("Promedio:", promedio.toFixed(2));