class Estudiante {

    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos() {
        return { nombre: this.nombre, asignaturas: this.asignaturas };
    }
}

const est = new Estudiante("Jorge", ["Javascript", "HTML", "CSS"]);
console.log(est.obtenDatos());