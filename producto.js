class Producto{
    titulo;
    material;
    precio;
    costoEnvio;

    constructor(titulo, material, precio, costoEnvio){
        this.titulo = titulo;
        this.material = material;
        this.precio = precio;
        this.costoEnvio = costoEnvio;
    }

    titulo = function(){
        console.log("Prenda: " + this.titulo);
    }

    costoEnvio = function(costo) {
        console.log("El envío tiene un costo de $ " + costo);
        precio += precio + costo;
        console.log("El costo total es de: "+ precio);
    }

}


// productos.push(new Producto("Remera blanca", "Algodón", 8000, "si"));
// productos.push(new Producto("Remera negra", "Algodon", 8500, "si"));
// productos.push(new Producto("Pantalon tipo jean", "Tela", 15000, "si"));
// productos.push(new Producto("Pantalon jogger", "Tela", 10000, "no"));
// productos.push(new Producto("Zapatatillas adidas", "Lona", 35000, "no"));
// productos.push(new Producto("Zapatillas nike", "Goma", 30000, "si"));



// const productos = [
    //     {titulo:"Remera blanca", material: "Algodon", precio: 8000, costoEnvio: "si"},
    //     {titulo:"Remera negra", material: "Algodon", precio: 8500, costoEnvio: "si"},
    //     {titulo:"Pantalon tipo jean", material: "Tela", precio: 15000, costoEnvio: "si"},
    //     {titulo:"Pantalon jogger", material: "Tela", precio: 10000, costoEnvio: "no"},
    //     {titulo:"Zapatatilla adidas", material: "Lona", precio: 35000, costoEnvio: "no"},
    //     {titulo:"Zapatilla nike", material: "Goma", precio: 30000, costoEnvio: "si"}];