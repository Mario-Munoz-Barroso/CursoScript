// if
let nota = 6;
//  if (nota < 0 || nota > 10) {
//    alert("La nota no es valida");
//  } else if (nota > 4) {
//    if (nota <= 7) {
//   //5-7
//    } else if (nota <= 9) {
//   //7-9
//   } else if (nota <= 10) {
//      //9-10
//    }
//  }

// nota>5 ? alert("aprobado") : alert ("Suspenso")

//continua pidiendo numeros por prompt hasta que acierte el numero generado
//cuando se acierte aparecera un alert diciendo el numero de intentos

/* let aleatorio = Math.round(Number(Math.random() * 11));
let pedido = null;
let intentos = 0;
while (aleatorio != pedido) {
  intentos++;
  pedido = prompt("Escribe un numero");
}
alert(`El numero era ${aleatorio} y lo has intentado ${intentos} veces `); */


// for

 let coleccionPalabras = ["uno","dos","tres","Cuatro",true,1,2,3,false]
/*for (let index = 0; index < coleccionPalabras.length; index++) {
    console.log(coleccionPalabras[index])
    console.log(`\t ${typeof coleccionPalabras[index] }`)
} */

//foreach

/* coleccionPalabras.forEach((element,posicion,array) => {
    console.log(element);
    console.log(`\t ${posicion}`)
    console.log(`\t\t ${array}`)
}); */


// For in

for (const key in object) {
        const element = object[key];
        
    
}

// For of se obtiene cada una de las prosiciones. Igual que el de java 

for (const iterator of object) {
    
}
