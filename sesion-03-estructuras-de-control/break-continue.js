//Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;//continuando el bucle
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);
    if (lista[i] > 5) {
        break;//rompiendo el bucle
    }
}

//Cuál es el ámbito de un bucle
console.log(i);
console.log(j);
console.log(k);//ninguna variable con let y const será reconocida fuera del bucle