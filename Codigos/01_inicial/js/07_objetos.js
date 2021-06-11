let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  edad: 17,
  hobbies: ["cine", "deporte", "musica"],
  hijos: [
    { nombre: "Celia", edad: 12 },
    { nombre: "sdfs", edad: 2 },
    { nombre: "ghj", edad: 1 },
    { nombre: "jhgf", edad: 6 },
    { nombre: "gmvjd", edad: 9 },
    { nombre: "Pepa", edad: 4 },
    { nombre: "mimimi", edad: 8 },
    { nombre: "tototot", edad: 11 },
  ],
};

console.log(objeto.hijos.filter((element) => element.edad > 7));

console.log(objeto.apellido);

objeto.hobbies.forEach((element) => {
  console.log(element);
});

objeto["coches"] = [
    {hijo: "juan",marca:"porsche"}
]
