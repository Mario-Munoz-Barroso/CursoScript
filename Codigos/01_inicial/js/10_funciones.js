function funcionNormal() {
  console.log("Ejecucion normal");
}
function funcionParametros(parametroUno, parametroDos) {
  console.log(`${parametroUno}${parametroDos}`);
}
function funcionParametrosAdicionales() {
  console.log("ejecucion adicional");
  if (arguments.length > 0) {
    arguments[1];
    console.log("Hay cosas");
  } else {
    console.log("No hay cosass");
  }
}
function parametrosPorDefecto(parametroUno, parametroDos = 2) {
  console.log(`${parametroUno}${parametroDos}`);
}
let funcionSuma = function (parametroUno, parametroDos) {
  console.log(`${parametroUno + parametroDos}`);
};
let funcionDivision = (num1, num2) => Number(num1) / Number(num2);

function mostrarMensaje(nombre) {
  console.log("Esto es una funcion que muestra un mensaje de " + nombre);
}
function funcionCompleta(funcion, nombre) {
  console.log("Ejecucion de la funcion de form completa \t");
  funcion(nombre);
}
funcionCompleta((nombre) => {
  console.log("esta funcion ejecuta cosas de " + nombre);
}, "Borja");
function funcionConRetorno() {
  return "Ejemplo de retormo";
}
function funcionRetornoFuncion(params) {
  return (params) => {
    console.log("Ejecucion de algo");
  };
}
function asincronaInterval() {
  setInterval(() => {
    console.log("Interval");
  }, 1000);
}
function asincroniaTimeOut() {
    setTimeout(()=>{ 
    console.log("Funcion Time Out")
    },3000)
    
}
funcionCompleta(mostrarMensaje, "Mario");

funcionNormal();
funcionParametros(5, "Hola");
asincronaInterval()
asincroniaTimeOut()