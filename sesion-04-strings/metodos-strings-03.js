//Métodos de cadenas de texto (parte 3)
//https://regexr.com
let texto_largo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
console.log(texto_largo.match(/dolor/g));//muestra todas las coincidencias en el string

//¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("ipsum"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Lorem"));

//Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("consequat."));