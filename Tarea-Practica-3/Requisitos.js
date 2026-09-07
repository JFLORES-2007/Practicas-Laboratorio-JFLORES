// Validar requisitos de empleado
// Solicite nombre, edad y años de experiencia. 
// Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. 
// Si cumple ambas condiciones, muestre "Candidato válido". 
// Si no cumple, muestre "No cumple con los requisitos".

// Importamos el módulo readline
const readline = require("readline");

// Creamos la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos el nombre del candidato
rl.question("Ingrese su nombre: ", function(nombre) {

    // Solicitamos la edad
    rl.question("Ingrese su edad: ", function(respuestaEdad) {

        // Convertimos la edad a número
        let edad = Number(respuestaEdad);

        // Solicitamos los años de experiencia
        rl.question("Ingrese sus años de experiencia: ", function(respuestaExperiencia) {

            // Convertimos la experiencia a número
            let experiencia = Number(respuestaExperiencia);

            // Validamos ambas condiciones usando el operador lógico &&
            if (edad > 18 && experiencia > 0) {
                console.log(nombre + ": Candidato válido");
            }else {
                console.log(nombre + ": No cumple con los requisitos");
            }

            rl.close();
        });
    });
});