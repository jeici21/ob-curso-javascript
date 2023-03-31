const yo = {
    nombre: "Jorge", apellido: "Castro", edad: 30, altura: 164, eresDesarrollador: true
}
const varEdad = yo.edad;
const amigosYYo = [
    yo,
    { nombre: "William", apellido: "Méndez", edad: 32, altura: 165, eresDesarrollador: true },
    { nombre: "María", apellido: "Godoy", edad: 30, altura: 160, eresDesarrollador: false }
]
const amigosYYoEdad = amigosYYo.sort((a, b) => b.edad - a.edad);
console.log(varEdad, amigosYYo, amigosYYoEdad);