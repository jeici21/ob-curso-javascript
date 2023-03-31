const f = document.getElementById("formulario");
console.log(f);

f.addEventListener("submit", evento => {//se activa al dar clic en el botón enviar
    console.log(evento);
    evento.preventDefault();//evitando comportamiento por defecto
});