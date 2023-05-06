productos = [];

productos.push(new Producto("Remera blanca", "Algodón", 8000, "si"));
productos.push(new Producto("Remera negra", "Algodon", 8500, "si"));
productos.push(new Producto("Pantalon tipo jean", "Tela", 15000, "si"));
productos.push(new Producto("Pantalon jogger", "Tela", 10000, "no"));
productos.push(new Producto("Zapatatillas adidas", "Lona", 35000, "no"));
productos.push(new Producto("Zapatillas nike", "Goma", 30000, "si"));

carrito = [];

let opcion;
let elegirProducto;
// const contProductos = productos.map((prod) => prod.titulo + "\n");
// const carritoTotal = carrito.map((carritoProd) => carritoProd + "");
let agregar = "";
let seguir;


do {
    opcion = Number(prompt("Seleccione alguna de las opciones que desee ingresar\n 1-Mostrar todos los productos\n 2-Buscar algún producto por su nombre\n 3-Agregar un producto\n 4-Quitar algun producto del carrito"));

    switch (opcion) {
        case 1:
            mostrarTodo();
            break;
        case 2:
            mostrarProducto();
            break;
        case 3:
            agregarProd();
            break;
        case 4:
            quitarProd();
            break;
        default:
            alert("Opcion invalida");
    }

} while (opcion <= 5)

function mostrarTodo() {
    const todoProductos = productos.map((producto) => {
        alert(producto.titulo);
    });
}

function mostrarProducto() {
    const inputUsuario = prompt("Ingrese la prenda que desea ver");
    productos.forEach((producto) => {
        if (producto.titulo === inputUsuario) {
            alert(producto.titulo + "\nPrecio: " + producto.precio + "\nMaterial: " + producto.material + "\nCosto de envio?: " + producto.costoEnvio);
        }
    });
}

function agregarProd() {
    let inputUsuario = prompt("Que producto desea agregar?");
    const agregarMas = productos.find((items)=>items.titulo === inputUsuario);
    carrito.push(agregarMas);
    seguirSiNo();
    console.log("Productos agregados: " + inputUsuario);
}

function quitarProd() {
    console.log(carrito);
    const inputUsuario = Number(prompt("Seleccione con un numero los productos que desee eliminar según el orden agregado?")); 
    // if (inputUsuario == 1) {
    //     carrito.splice(0, 1);
    // }
    switch(inputUsuario){
        case 1:
            carrito.splice(0, 1);
            break;
        case 2:
            carrito.splice(1, 1);
            break;
        case 3:
            carrito.splice(2, 1);
        default:
            alert("gracias");
    }
    
    console.log("Productos en el carrito: " + carrito);
}

function seguirSiNo() {
    seguir = prompt("Desea seguir agregando productos? s/n");
    if (seguir == "s") {
        agregarProd();
    }
    else {
        alert("Volviendo al inicio");
    }
}





