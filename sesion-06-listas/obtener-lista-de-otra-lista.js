//Cómo obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"];

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4));//desde dónde, hasta dónde coger los elementos para la nueva lista -1
const array2 = array.slice(2, 5);
console.log(array2);

const array3 = array.slice(2, -2);//con números negativos, el límite empieza desde el final y va a la izquierda
console.log(array3);