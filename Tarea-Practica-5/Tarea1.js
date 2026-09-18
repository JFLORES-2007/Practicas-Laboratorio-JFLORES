// Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto 
// a retirar. Usando Switch, asigne un límite de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor 
// o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre 
// "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no 
// es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de 
// tarjeta no es válido, muestre "Tarjeta no válida".
import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Pedimos el tipo de tarjeta
rl.question('Ingrese el tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ', (tipoTarjeta) => {

    // Pedimos el monto que desea retirar
    rl.question('Ingrese el monto a retirar: $', (monto) => {
        tipoTarjeta = parseInt(tipoTarjeta);
        monto = parseFloat(monto);

        // Variable que almacenará el límite de retiro
        let limite;
        switch (tipoTarjeta) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                console.log('Tarjeta no válida');
                rl.close();
                return;
        }
        // Primero verificamos si el monto excede el límite
        if (monto > limite) {
            console.log('Límite excedido');
        }
        // Verificamos si el monto es múltiplo de 10
        else if (monto % 10 !== 0) {
            console.log('El monto debe ser múltiplo de 10');
        }
        // Si cumple las dos condiciones, el retiro es exitoso
        else if (monto <= limite && monto % 10 === 0) {
            console.log('Retiro exitoso');
        }
        // Cerramos readline
        rl.close();
    });
});