const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging")//añadiendo clase al elemento
        event.dataTransfer.setData("id", parrafo.id)//transfiriendo la info del elemento arrastrado mediante id
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)//haciendo aparecer una imagen cuando un elemento sea arrastrado
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")//quitando clase al elemento
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"//copy por defecto al soltar el elemento
        //console.log("Drag Over");
    })

    seccion.addEventListener("drop", event => {
        console.log("drop");
        const id_parrafo = event.dataTransfer.getData("id")//recibiendo la data del objeto arrastrado mediante id
        //console.log("Párrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)//recibiendo al elemento arrastrado
    })
})