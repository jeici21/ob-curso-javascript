const hTexto = document.getElementById("h-texto")
console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento => {//llamando al evento personalizado
    console.log(evento.detail);
    hTexto.innerText = evento.detail.texto//cambiando el texto por el ingresado
    hTexto.style.color = evento.detail.color//cambiando color por el ingresado
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {//creando nuevo evento
        detail: {//añadiendo detalles del evento
            texto: nuevoTexto,
            color
        }
    });
    hTexto.dispatchEvent(evento)//liberando el evento
}