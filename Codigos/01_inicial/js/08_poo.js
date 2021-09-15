class Persona {
  // Propiedades
  nombre;
  apellido;
  edad;

  // Constructor
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // Funciones

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}
let persona = new Persona("Borja", "Martin", 18);
console.log(persona);
