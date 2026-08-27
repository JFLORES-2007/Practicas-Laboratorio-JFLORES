// Tarea 1: Cálculo del perímetro y área de un círculo
//definicion de variables
let radio = 7;
const pi = 3.14159;

//Formula para el Perimetro del circulo
let perimetro = 2 * pi * radio;

//Hacemos la formula para 
let area = pi * radio ** 2;

//En este apartado le ponemos cuantos decimales tendra el resultado
perimetro = perimetro.toFixed(2);
area = area.toFixed(2);

// Mostramos los resultados en la consola
console.log("Radio del círculo: " + radio);
console.log("Perímetro o circunferencia: " + perimetro);
console.log("Área del círculo: " + area);