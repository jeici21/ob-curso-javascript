//Listas, arrays o arreglos
//dos formas de crear listas
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);//array de 3 espacios
lista3[0] = "Soy el primer elemento, index 0";//añadiendo texto al primer espacio de la lista
const lista4 = [lista, lista2, lista3];//lista de listas

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {//conjunto de atributos
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martín", "Raúl"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4//también se pueden declarar atributos con comillas
}
movil.año = 2019;//añadiendo nuevo atributo al objeto
movil.marca = "Samsung";//cambiando valor de atributo de objeto

console.log(movil.marca);
//Fechas
//Librerías de apoyo Moment.js
const ahora = new Date();//obteniendo la fecha actual
console.log(ahora);
const fecha_milis = new Date(10);//Utilizando los milisegundos
console.log(fecha_milis);
const fecha_cadena = new Date("march 25 2020");//obteniendo fecha ingresada con texto
console.log(fecha_cadena);
const fecha_valores = new Date(2022, 0, 15);//obteniendo fecha ingresada con dígitos
console.log(fecha_valores);
const dia = ahora.getDate();//obteniendo día
const mes = ahora.getMonth() + 1;//obteniendo mes
const año = ahora.getFullYear();//obteniendo año
console.log(dia, mes, año);
