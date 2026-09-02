const { log } = require("console");
const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero: ",(numero1)=>{
    rl.question("Ingrese un segundo numero: ",(numero2)=>{
        if(numero1>numero2){
            console.log(`Su numero mayor es: `,numero1);
            
        }else if(numero2>numero1){
            console.log(`Su numero mayor es: `,numero2);
            
        }else{
            console.log(`Su numeros son iguales  `,numero1,"=",numero1);
            
        }
        rl.close();
    })
})