//Métodos de cadenas de texto (parte 2)
let input = "ESCORpio soy";
let db = "escorpio";

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase());//minúsculas
console.log(input.toUpperCase());//mayúsculas
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena.";
console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar espacios al inicio y al final
let str_3 = "   Hola soy un string con espacios al final.   ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);//Solo eliminar espacios al inicio
console.log(str_3.trimEnd().length);//Solo eliminar espacios al final

//Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4";
console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar";
console.log(str_5.indexOf("Gorka"));//Solo para la primera coincidencia
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka"));//Solo para la última coincidencia