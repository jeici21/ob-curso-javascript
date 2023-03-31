//Bucles For
for (let i = 0; i < 10; i += 3) {
    //Esto es el bucle
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {//obteniendo cada valor de la lista
    console.log(lista[i] * 2);
}

//Estructura for... of
for (let valor of lista) {
    console.log(valor);//forma más corta de obtener valores de la lista
}

//Estructura foreach
lista.forEach(valor => {
    console.log(valor);//otra forma de obtener valores de la lista
});

//Estructura for... in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);//accediendo al valor de la propiedad del objeto mediante variable

for (let propiedad in persona) {
    console.log(propiedad);//accediendo a la propiedad del objeto
    console.log(persona[propiedad]);//accediendo a los valores de las propiedades del objeto
}