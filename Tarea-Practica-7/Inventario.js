// Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
// Cree un arreglo de objetos que represente un inventario con al menos 4 productos. Cada producto debe tener: nombre, 
// precio y cantidad. Usando FOR...OF, recorra el arreglo y muestre cada producto con su valor total (precio × cantidad). 
// Además, usando FOR...IN, recorra un objeto que represente el resumen del inventario (total de productos, 
// valor total del inventario) y muestre sus propiedades.

import readline from "node:readline";

const entrada = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const productosInventario = [];
const limiteProductos = 4;

function pedirProducto() {
   const numeroActual = productosInventario.length + 1;

   entrada.question(`Ingrese el nombre del producto ${numeroActual}: `, (nombreProducto) => {
      if (nombreProducto.trim() === "") {
         console.log("El nombre del producto no puede estar vacío.");
         pedirProducto();
         return;
      }

      entrada.question(`Ingrese el precio de ${nombreProducto}: `, (precioIngresado) => {
         const precioProducto = Number(precioIngresado);

         if (isNaN(precioProducto) || precioProducto <= 0) {
            console.log("El precio debe ser un número mayor a 0.");
            pedirProducto();
            return;
         }

         pedirCantidad(nombreProducto, precioProducto);
      });
   });
}

function pedirCantidad(nombreProducto, precioProducto) {
   entrada.question(`Ingrese la cantidad de ${nombreProducto}: `, (cantidadIngresada) => {
      const cantidadProducto = Number(cantidadIngresada);

      if (isNaN(cantidadProducto) || cantidadProducto <= 0) {
         console.log("La cantidad debe ser un número mayor a 0.");
         pedirCantidad(nombreProducto, precioProducto);
         return;
      }

      productosInventario.push({
         nombre: nombreProducto,
         precio: precioProducto,
         cantidad: cantidadProducto
      });

      if (productosInventario.length < limiteProductos) {
         pedirProducto();
      } else {
         mostrarInventario();
      }
   });
}

function mostrarInventario() {
   let totalInventario = 0;

   console.log("\n=== Inventario de productos ===");
   for (const productoActual of productosInventario) {
      const subtotalProducto = productoActual.precio * productoActual.cantidad;
      totalInventario += subtotalProducto;

      console.log(
         `Producto: ${productoActual.nombre} | Precio unitario: $${productoActual.precio.toFixed(2)} | Cantidad: ${productoActual.cantidad} | Total: $${subtotalProducto.toFixed(2)}`
      );
   }

   const resumenInventario = {
      totalProductos: productosInventario.length,
      valorTotalInventario: totalInventario
   };

   console.log("\n=== Resumen del inventario ===");
   for (const campoResumen in resumenInventario) {
      console.log(`${campoResumen}: ${resumenInventario[campoResumen]}`);
   }

   entrada.close();
}

pedirProducto();