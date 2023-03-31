let nombre = "Jorge", apellido = "Castro"
const nombreApellido = { nombre, apellido }
sessionStorage.setItem("YoSesion", JSON.stringify(nombreApellido))
localStorage.setItem("YoLocal", JSON.stringify(nombreApellido))
const fechaExp = new Date(Date.now() + 120000).toUTCString()
document.cookie = `nombreApellido=${nombreApellido.nombre} ${nombreApellido.apellido}; expires=${fechaExp}`