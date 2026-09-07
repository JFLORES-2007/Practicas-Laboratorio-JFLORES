// // ========================================================================================
// Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las 
// primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.
// ========================================================================================

// Importamos el módulo readline
import readline from "node:readline";

// Creamos la interfaz 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// Pedimos la informacion al Usuario
rl.question("Ingrese su nombre completo:", (nombreCom)=>{
    
    // Convertimos a minúsculas
    let nombreMin = nombreCom.toLowerCase()
    
    // Convertimos a mayúsculas
    let nombreMayu = nombreCom.toLocaleUpperCase()
    
    // Extraemos las primeras 4 letras
    let primeras4letras = nombreCom.slice(0,4);
 
    // Mostramos los resultados en consola
    console.log("Su nombre es mayusculas es: " +nombreMayu);
    console.log("Los ultimos 4 letras de su nombre son: " +primeras4letras);
    console.log("Su nombre es minusculas es: " +nombreMin);
    
    rl.close();

})