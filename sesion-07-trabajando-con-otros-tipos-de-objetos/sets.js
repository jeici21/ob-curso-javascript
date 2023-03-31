//Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, { id: 5 }];//almacenan todos los valores ingresados
const miSet = new Set(array);//solo almacenan valores únicos, no repetidos
console.log(array);
console.log(miSet);

//.add() -> Añadir elementos
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

//.delete() -> Borrar elementos
miSet.delete("Hola")
console.log(miSet);

//.clear() -> Borrar todo
/* miSet.clear();
console.log(miSet); */

//.has() -> True o false si el elemento existe
//console.log(array.includes(2));
console.log(miSet.has(40));

//.size -> tamaño del set
console.log(miSet.size);
//tres formas de iterar en Sets
miSet.forEach(valor => {
    console.log(valor);
});
const it_miSet = miSet.values();
console.log(it_miSet);
const ar_miSet = [...miSet];
console.log(ar_miSet[1]);