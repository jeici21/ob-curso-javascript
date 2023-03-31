//Funciones tipo flecha - funciones anónimas
const array = [1, 5, 6, 2, 7, 12, 8, 92];
const array2 = array.map((valor) => valor * 2);//función arrow anónima
console.log(array2);

/* const dobleDelValor = valor => {
    return valor * 2;
} */
const dobleDelValor = valor => valor * 2;//función arrow con nombre
console.log(doble(5));//A las funciones normales sí se les puede llamar antes 
console.log(dobleDelValor(6));//No se pueden llamar funciones arrow antes de su creación

const array3 = array.map(dobleDelValor);
console.log(array3);

function doble(valor) {
    return valor * 2;
}