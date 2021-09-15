console.log("Inicio de busqueda");
//let elemento = document.getElementsByTagName('select')
// let elemento = document.getElementById("exampleInputProfesion");
//let elemento = document.getElementsByClassName('form-control')
/* for (let index = 0; index < elemento.length; index++) {
    console.log(elemento[index])
    } */
let elemento = document.querySelector(".form-control");
// console.log(elemento);
//  let elemento = document.querySelectorAll('imput')
/* array.forEach(element => {
console.log(element.value)
    
}); */

function imputTeclaPulsada(nombre) {

    document.querySelector("#exampleInputNombre")


}
console.log(elemento)
function botonFormPulsado() {
    let nombre = document.querySelector("#exampleInputNombre")
    let apellido = document.querySelector("#exampleInputApellido")
    let edad = document.querySelector("#exampleInputEdad")
    

    console.log("Boton Pulsado")
    if(nombre != "" || apellido != "" || edad != "" ){
    alert("El nombre es: "+ nombre.value+ " El apellido es: "+ apellido.value+ " La edad es: "+ edad.value)
}else{
    alert("Rellena todos los campos")
}
    
}

/* let buttonForm=document.querySelector('button');
buttonForm.addEventListener('click',(elemento, evento) =>{
    console.log(elemento);
    console.log(evento);
}) */
