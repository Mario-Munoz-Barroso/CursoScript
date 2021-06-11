/* let coleccionNumeros = [1, 2, 3, 4, 5, 6];
let coleccionCosas = [1, true, "Morcilla"];

let equipos = ["Sevilla", "Getafe", "Madrid", "Barça", "Atleti", "Alcorcon"];
equipos.push("Villareal", "Mostoles", "Arroyomolinos");
console.log(equipos);

console.log("Equipo eliminado" + equipos.pop);

equipos.unshift("Valencia", "Leganes");
console.log(equipos);
equipos.shift;
 */
//Ejercicio
//Obtener los equipos con una B mayuscula o una L minuscula
// y mostrarlos por consola

/* let mimi = 0
let filtro =[]
equipos.forEach(element =>   {
    if(element.indexOf('B') !=-1 || element.indexOf(L)!=-1)(
        filtro[mimi] = element,
        mimi++
    )
});
*/
/* equipos.filter((element) => {
  element.indexOf("B") != -1 || element.indexOf("l") != -1;
}); */


//Multi dimensional

//console.log(equipoEspecial);

let equiposMulti=[
    ["Atleti",56],
    ["Madrid",76],
    ["Mostoles",23],
    ["Valencia",52],
    ["VillaReal",32],
    ["Barça",73],
    ["Alcorcon",12],
    ["Juventud",98],
];
/* for (let index = 0; index < equiposMulti.length; index++) {
    equipoEspecial = equiposMulti[index];
    if (equiposMulti[0]=='Madrid' || equiposMulti[0]=='Barsa') {
        console.log(equiposMulti[1])
    }

}

let numeros = [4,2,46,3,9,7,6,23]
numeros.sort((itemA,itemB)=> {
    if(itemA>itemB){
        return 1
    }else if(itemB>itemA){
        return -1
    }else
    return 0
})
 */



equiposMulti.sort((equipoA,equipoB)=> {
    if(equipoA[1]>equipoB[1]){
        return -1
    }else if(equipoB[1]>equipoA[1]){
        return 1
    }else
    return 0
})
// console.log(equiposMulti)

equiposMulti.forEach((element, index) => {
    console.log(`${index+1} - ${element[0]} - ${element[1]}`)
});