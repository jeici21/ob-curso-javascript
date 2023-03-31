//import { suma, eleva, nombre } from "./modulos/matematicas.js";
import * as moduloMatemáticas from "./modulos/matematicas.js";
import getAutor, { libro } from "./modulos/literatura.js";

const sum = moduloMatemáticas.suma(4, 12);
console.log(sum);

const potencia = moduloMatemáticas.eleva(2, 21);
console.log(potencia);

console.log(moduloMatemáticas.nombre);

console.log(getAutor());
console.log(libro);