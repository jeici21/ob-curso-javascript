document.querySelector("button").addEventListener("click", () => {
    alert("click en el botón")
})

$(() => {
    $("button").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    })
})