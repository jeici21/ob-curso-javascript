//Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Juan",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}
//dos formas de llamar atributos de objetos
console.log(obj.id);
console.log(obj["4-juegos"]);
//guardando el valor de un atributo en una variable
const prop = "isDeveloper";
console.log(obj[prop]);
//clonando un objeto
const obj2 = obj;
console.log(obj2);
//Al cambiar clon el original también cambia
obj2.nombre = "Íñigo";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1);
console.log(val2);
//Al clonar objetos de esta manera serán objetos totalmente diferentes
const obj3 = { ...obj }
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Gorka";
console.log(obj.nombre);
console.log(obj3.nombre);

//Cómo ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", año: 1939 },
    { titulo: "Titanic", año: 1997 },
    { titulo: "Moana", año: 2016 },
    { titulo: "El efecto mariposa", año: 2004 },
    { titulo: "TED", año: 2012 }
]
console.log(listaPeliculas);

//.sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL
listaPeliculas.sort((a, b) => a.año - b.año);
console.log(listaPeliculas);