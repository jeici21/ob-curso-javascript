const constante = "Hola soy una constante";
var a = 1;
console.log(a);
a = 4;
console.log(a);
console.log(constante);
let b = 3;
console.log(b);
b = 5;
console.log(b);

var variable = "Hola soy una variable VAR";
for (let i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";//El valor de variable cambia por ser global
}
console.log(variable);

let variableLet = "Hola soy una variable VAR";
for (let i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable";//El valor de variableLet no cambia y solo se aplica en el for
}
console.log(variableLet);

////////////
var num = 4;
console.log(typeof variableLet);//mostrando el tipo de la variable
num = "Hola soy num";
console.log(typeof num);//las variables cambian de tipo si se les da un valor distinto