/* localStorage.setItem("nombre", "Gorka")//guardando key y valor en local storage
localStorage.setItem("nombre", "Miguel") */
//console.log(localStorage.getItem("nombre"));//mostrando registro con esa key

//localStorage.setItem("persona", JSON.stringify({ nombre: "Gorka", edad: 32 }))
//console.log(JSON.parse(localStorage.getItem("persona")));

//JSON.stringify -> Convierte un objeto/array en JSON
//JSON.parse -> Convierte un JSON en objeto/array
localStorage.removeItem("nombre")//elimina registro con ese key
sessionStorage.setItem("nombre-session", "Gorka")//creando sesión

/*Cookies*/
document.cookie = "nombreCookie=GorkaCookie"//creando cookie
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2024, 0, 1).toUTCString()
console.log(document.cookie);