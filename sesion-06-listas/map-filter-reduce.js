//Trabajar con métodos más avanzados
//.map() .filter() .reduce()
const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v);
    return 4;
});
console.log(val);
//agregando numeración al array y guardando en uno nuevo
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 },
];
/* const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
}); */
//Filtrando personas con más de 30 años
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);
//Filtrando personas que no se llamen Miguel
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);

const valores = [3, 56, 23, 5, 90, 100];
//realizando la sumatoria de todos los valores del arreglo
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(suma);