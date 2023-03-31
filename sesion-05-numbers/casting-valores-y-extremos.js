//Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

//Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero);
console.log(numero + num2);//Error de concepto
console.log(Number(numero) + num2);//string a entero
console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

//Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));//si empieza con 0x lo reconocerá como hexadecimal

//Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;//precisión mínima para que un valor pueda cambiar
let min_valor_JS = Number.MIN_VALUE;//valor mínimo manejable por JS
let max_valor_JS = Number.MAX_VALUE;//valor máximo manejable por JS
console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 1023);//potenciación