const boton = document.querySelector("#btn")//llamando a cualquier elemento, id o clase
//console.log(boton);

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("¿Estás de acuerdo?") && console.log("OK");
    //confirm("¿Estás de acuerdo?") ? console.log("OK") : console.log("NO!!");
    const respuesta = confirm("¿Seguro?")//alerta de aceptar y cancelar
    if (respuesta) {
        console.log("Estás de acuerdo");
    } else {
        console.log("NO estás de acuerdo");
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")//alerta para ingresar información
    if (nombre) {
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No has introducido nada");
    }
})

const lista = [{
    nombre: "Gorka",
    edad: 34
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Amaia",
    edad: 30
}]
console.log(lista);
console.table(lista)//creando tabla en la terminal