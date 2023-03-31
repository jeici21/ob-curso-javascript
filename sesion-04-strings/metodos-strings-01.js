//Métodos más utilizados con cadenas de caracteres
//Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

//Obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);
let substring_str = str.substring(5, 10);
console.log(substring_str);
let substr_str = str.substr(5, 10);
console.log(substr_str);

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka";
console.log(cadena);

//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel'));
let texto_largo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
console.log(texto_largo.replace('ipsum', 'dolor'));

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/ipsum/g, 'dolor'));