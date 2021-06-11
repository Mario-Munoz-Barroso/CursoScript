let baraja = ["T", "C", "D", "p"];
let palos = [];
//1-10 -J(11)-Q(12)-K(13)
// Trebol Diamante Corazon Picas

for (let index = 0; index < baraja.length; index++) {
  let carta = "";
  for (let index2 = 0; index2 < 14; index2++) {
    if (index2 == 11) {
      carta = "J" + palos[index];

      //   console.log("J");
    } else if (index2 == 12) {
      carta = "Q" + palos[index];

      //   console.log("Q");
    } else if (index2 == 13) {
      carta = "K" + palos[index];

      //   console.log("K");
    }else{
    // console.log(index);
    carta = index2 + palos[index];
    }
    baraja.push(carta)
  }
}
console.log(baraja)

_.suffle(baraja)
