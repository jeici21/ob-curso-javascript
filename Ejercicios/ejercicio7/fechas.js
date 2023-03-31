const hoy = new Date();
const fechaNacimiento = new Date(1992, 6, 4);
const comparar = hoy.getTime() > fechaNacimiento.getTime();
const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const añoNacimiento = fechaNacimiento.getFullYear();
console.log(hoy, fechaNacimiento, comparar, diaNacimiento, mesNacimiento, añoNacimiento);