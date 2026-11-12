// Tarea 2: Fábrica de funciones
// Cree una función de orden superior llamada crearMultiplicador que reciba un
//  número (el factor) y devuelva una nueva función que multiplique cualquier número por ese factor.
//   Luego, cree un "duplicador" (factor 2) y un "triplicador" (factor 3), 
// y pruebe ambas funciones con un número para mostrar los resultados.

const crearMultiplicador = (factor) => {
    return (numero) => numero * factor;
};

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

console.log("Duplicador de 5:", duplicador(5));
console.log("Triplicador de 5:", triplicador(5));