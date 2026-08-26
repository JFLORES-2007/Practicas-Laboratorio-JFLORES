// Información de estudiante: Solicite nombre, apellido, año de ingreso y promedio. Muestre nombre y apellido en mayúsculas, primeras 3 letras del apellido, últimos 2 dígitos del año y promedio con 2 decimales.
let nombre = "jorge";
let apellido = "flores";
let anio = 2007;
let promedio = 9.99999;

console.log("Su nombre y apellido en mayuscula es: "+nombre.toUpperCase +apellido.toUpperCase);
console.log("las primeras 3 letras del apellido son: "+apellido.slice(0,3));
console.log("los 2 digitos del año son:"+anio.toString().slice(2,4));
console.log("Su promedio con 2 decimales es: "+promedio.toFixed(2));



