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
const contProductos = productos.map((prod)=>prod.titulo+ "\n");

do{
opcion = Number(prompt("Seleccione alguna de las opciones que desee ingresar\n 1-Mostrar todos los productos\n 2-Buscar algún producto por su nombre\n 3-Agregar un producto\n 4-Vaciar todo"));

switch (opcion) {
    case 1:
        mostrarTodo();
        break;
    case 2:
        mostrarProducto();
        // mostrarNombre();
        break;
    case 3:
        agregarProd();
        break;
    default:
        alert("Opcion invalida");
}

}while(opcion <= 5) 

function mostrarTodo(){
    alert(contProductos);
}

function mostrarProducto() {
    const inputUsuario = prompt("Ingrese la prenda que desea ver");
    productos.forEach((producto) => {
        if (producto.titulo === inputUsuario) {
            alert(producto.titulo  +"\nPrecio: "+producto.precio +"\nMaterial: "+producto.material +"\nCosto de envio?: "+producto.costoEnvio);
        }
    });
}

function agregarProd(){
    const inputUsuario = prompt("Que producto desea agregar?");
    productos.forEach((producto) =>{
        if(producto.titulo === inputUsuario){
            carrito = productos.push(inputUsuario);
        }
        alert("Producto agregado " + carrito);
    });
}

function quitarProd(){
    const inputUsuario = Number(prompt("Ingrese con un numero el producto que desee eliminar"));
    
}







