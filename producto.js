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


