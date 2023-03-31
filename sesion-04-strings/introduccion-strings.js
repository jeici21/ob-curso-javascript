//Sesión 4 - Strings (cadenas de caracteres)
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";
console.log(str_sng);
console.log(str_dbl);

//slash inverso para usar el mismo tipo de comillas en un string
let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\"";
//se puede usar los dos tipos de comillas para más facilidad
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'";
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\'';
console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

//Comillas invertidas (backticks)
let str_backticks = `Este es un string con backticks`;
console.log(str_backticks);

let nombre = "Íñigo";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo);

//Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>`;
console.log(plantilla);

//Introducción de variables en HTML
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];