let alturacm = 164;
let alturam = alturacm / 100;
let peso = 4.31;
let alturaRedArr = Math.ceil(alturam);//redondeo hacia arriba
let pesoRedAba = Math.floor(peso);//redondeo hacia abajo
let comparacion = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(alturacm, alturam, peso, alturaRedArr, pesoRedAba, comparacion);