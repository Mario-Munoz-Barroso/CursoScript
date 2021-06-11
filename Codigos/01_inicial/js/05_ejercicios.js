//IF, PROMPT, ALERT
//primer ejercicio
/*console.log("Hola Mundo");
let multiplicacion = 5 * 5;
console.log("5*5");
console.log(String(multiplicacion));

//segundo ejercicio
const NOMBRE = true;
let numero = String(1);
let numeroCorrecto = numero;
let suma = numero + numero;
let sumaOK = numeroCorrecto + numeroCorrecto;
console.log(suma);
console.log(sumaOK);

//tercer ejercicio
let primerLado = Number(prompt("Introduce la primera variable"));
let segundoLado = Number(prompt("Introduce la segunda variable"));
let tercerLado = Number(prompt("Introduce la tercera variable"));
let cuartoLado = Number(prompt("Introduce la cuarta variable"));
if (
  !isNaN(primerLado, segundoLado, tercerLado, cuartoLado) &&
  primerLado == segundoLado &&
  segundoLado == tercerLado &&
  tercerLado == cuartoLado
) {
  let area = primerLado * segundoLado;
  alert(`El area es: ${area}`);
} else {
  alert("El valor introducido no es válido");
}

//cuarto ejercicio
let numeroParImpar = Number(prompt("Introduce un número"));
if (numeroParImpar % 2 == 0) {
  alert("Es par");
} else if (isNaN(numeroParImpar)) {
  alert("No es un valor valido");
} else {
  alert("Es impar");
}

//quinto ejercicio
let nombre = prompt("Introduce tu nombre");
let letra = prompt("Introduce una letra");
if (nombre.indexOf(letra) != -1) {
  let contador = 0;
  for (let index = 0; index < nombre.length; index++) {
    if (nombre.charAt(index) == letra) {
      contador++;
    }
  }
  alert(`la letra está y tiene ${nombre.length} y hay ${contador} ${letra} `);
}

//sexto ejercicio
let primerNumero = Number(prompt("Introduce el primer numero"));
let segNumero = Number(prompt("Introduce el segundo numero"));
if (primerNumero > segNumero) {
  console.log("El primer numero introducido es el mayor");
} else if (segNumero > primerNumero) {
  console.log("El segundo numero introducido es el mayor");
} else if (isNaN(primerNumero) || isNaN(segNumero)) {
  alert("No se pueden introducir letras");
} else if (primerNumero < 0 || segNumero < 0) {
  alert("Los numeros introducidos son negativos");
}

//DATE
//segundo ejercicio
let fechaHoy = new Date();
let dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log(
  `Buenas tardes, hoy es ${
    dias[fechaHoy.getDay()]
  } ${fechaHoy.getDate()} y son las ${fechaHoy.getMinutes()}:${fechaHoy.getSeconds()}`
);

//tercer ejercicio
let fechaAhora = new Date();
let fechaPast = new Date(2020, 0, 1);
let diasPast = (fechaAhora.getTime() - fechaPast.getTime()) / 86400000;
console.log(diasPast);

//BUCLES, OPERACIONES
//segundo ejercicio
let num = Number(prompt("Introduce un numero"));
do {
  alert(`${num}`);
  num--;
} while (num > 0);
//cuarto ejercicio
let numeroInicial = Number(prompt("primer num"));
let numeroFinal = Number(prompt("segundo num"));
for (let index = numeroInicial; index < array.numeroFinal; index++) {
  console.log(index);
}
//quinto ejercicio
let nuMero = Number(prompt("Introduce un numero"));
if (!isNan(nuMero) && nuMero > 0) {
  do {
    alert(`${nuMero}`);
    nuMero--;
  } while (nuMero > 0);
} else {
  alert("El dato introducido no es válido");
}

//ARRAY, FUNCIONES
//quinto ejercicio
let numeroNumber = Number(prompt("Introduce un numero"));
if (isNaN(numeroNumber)) {
  alert("El dato introducido no es de tipo number");
} else {
  alert("El dato introducido es de tipo number");
}

//sexto ejercicio
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 0;
//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
while (contador < numeros.length) {
  console.log(numeros[contador]);
  contador++;
}
//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
}
//Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
numeros.forEach((element) => console.log(element));
//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
numeros.forEach((element) => console.log(element + 1));
//Calcular la media de todos los elementos del array
let media = 0;
numeros.forEach((element) => {
  media += element;
  console.log(element);
});

console.log(media / numeros.length);

//séptimo ejercicio
let arrayVacio = [];
for (let index = 0; index < 20; index++) {
  let numeroArray = Math.round(Math.random() * 10);
  arrayVacio.push(numeroArray);
  console.log(arrayVacio);
}

//octavo ejercicio
let nombreSaludo = prompt("Introduce tu nombre");
if (isNan(nombreSaludo)) {
  alert(`Hola Buenas Tardes ${nombreSaludo}, un saludo`);
} else {
  alert("No se pueden introducir números");
}
*/


//noveno ejercicio
let fraseUsuario;

do {
  fraseUsuario = prompt("Introduce una frase");
  let palabrasFraseUsuario =fraseUsuario.split(" ");
  let frasesFraseUsuario=fraseUsuario.split(',');
  fraseUsuario.trim();
  console.log(
    `El dato introducido tiene ${fraseUsuario.length} letras, ${palabrasFraseUsuario.length} palabras, ${frasesFraseUsuario.length} frases `
  );
} while (fraseUsuario.length < 10);
