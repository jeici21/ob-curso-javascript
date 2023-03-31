let compras = ["leche", "tomate", "pan", "pimiento", "azúcar"];
compras.push("Aceite de Girasol");
console.log(compras);
compras.pop();
console.log(compras);
let peliculas = [
    { titulo: "Rocky", director: "John G. Avildsen", fecha: new Date(1976, 11, 3) },
    { titulo: "Shrek para siempre", director: "Mike Mitchell", fecha: new Date(2010, 5, 18) },
    { titulo: "Demon Slayer: Tren Infinito", director: "Haruo Sotozaki", fecha: new Date(2020, 9, 16) }
];
const peliculas2010 = peliculas.filter(pel2010 => pel2010.fecha > new Date(2010, 0, 1));
const peliculasDir = peliculas.map(dir => dir.director);
const peliculasTit = peliculas.map(tit => tit.titulo);
const peliculasDirTit = peliculas.concat(peliculasDir, peliculasTit);
const peliculasDirTit2 = [...peliculasDir, ...peliculasTit];
console.log(peliculas2010, peliculasDir, peliculasTit, peliculasDirTit, peliculasDirTit2);