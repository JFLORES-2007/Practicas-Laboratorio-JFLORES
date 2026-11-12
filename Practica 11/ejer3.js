// Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
// Cree un arreglo de objetos que represente productos, donde cada objeto tenga nombre y precio (por ejemplo: 
// { nombre: "Laptop", precio: 800 }).

const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Audifonos", precio: 120 }
];

console.log("Lista de productos:");

productos.forEach(producto => {
    console.log("Nombre:", producto.nombre, "Precio: $" + producto.precio);
});

const productosFiltrados = productos.filter(producto => producto.precio > 100);

console.log("Productos con precio mayor a $100:");
console.log(productosFiltrados);