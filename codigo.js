// Definimos un array de objetos que contenga el nombre y el precio de cada producto
const productos = [
    { nombre: "Samsung", precio: 800 },
    { nombre: "Apple", precio: 1200 },
    { nombre: "Huawei", precio: 700 },
    { nombre: "Xiaomi", precio: 600 },
    { nombre: "OnePlus", precio: 900 },
    { nombre: "Motorola", precio: 500 },
    { nombre: "Nokia", precio: 400 },
    { nombre: "Sony", precio: 750 },
    { nombre: "LG", precio: 600 }
];

// Creamos una lista de productos inicialmente vacía
const listaProductos = [];

// Función para agregar un nuevo producto a la lista
function agregarProducto(nombre, precio) {
    listaProductos.push({ nombre, precio });
}

// Preguntamos si desea agregar un nuevo producto
let opcion = prompt("¿Desea agregar un nuevo producto? (n - salir)");

while (opcion.toLowerCase() !== 'n') {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    // Agregamos el producto a la lista
    agregarProducto(nombreProducto, precioProducto);

    opcion = prompt("¿Desea agregar un nuevo producto? (n - salir)");
}

// Mostramos la lista de productos con sus precios
console.log("Lista de productos:");
for (let producto of listaProductos) {
    console.log(`${producto.nombre}: $${producto.precio}`);
}

// Función para calcular el precio total en dólares basado en los productos seleccionados
function calcularPrecioTotal(productosSeleccionados) {
    let total = 0;
    for (let producto of productosSeleccionados) {
        let productoEncontrado = productos.find(item => item.nombre === producto);
        if (productoEncontrado) {
            total += productoEncontrado.precio;
        } else {
            console.log(`Producto '${producto}' no encontrado en la lista de productos.`);
        }
    }
    return total;
}

// Ejemplo de productos seleccionados
let productosSeleccionados = ["Samsung", "Apple", "Huawei"];

// Calculamos el precio total en dólares
let precioTotal = calcularPrecioTotal(productosSeleccionados);
console.log("Precio total a abonar:", precioTotal, "dólares");
