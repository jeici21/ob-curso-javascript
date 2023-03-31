const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const imagen = document.querySelector("img")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        event.dataTransfer.setDragImage(document.querySelector(".imagen-fantasma"), 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        console.log("drop");
        const parrafo = document.getElementById(event.dataTransfer.getData("id"))
        seccion.appendChild(parrafo)
    })
})

imagen.addEventListener("dragover", event => {
    event.preventDefault()
})

imagen.addEventListener("drop", event => {
    event.preventDefault()
    const parrafoEliminado = document.getElementById(event.dataTransfer.getData("id"));
    parrafoEliminado.parentNode.removeChild(parrafoEliminado);
})