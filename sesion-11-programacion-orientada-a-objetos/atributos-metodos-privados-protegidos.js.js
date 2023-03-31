class Persona {
    //Private -> #
    //Private -> Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

    //Protected -> _
    //Protected -> Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom, edad) {//atributos de la clase
        this.#nombre = nom;//inicializando atributos protegidos, solo se podrán acceder mediante métodos
        this.#edad = edad;//this para aclarar que nos referimos a los de la clase
    }

    saludo() {//método de la clase
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }

    obtenNombre() {//Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre;
    }

    #obtenEdad() {//solo se puede acceder a esta función dentro de esta clase
        return this.#edad;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad;
    }
}

const persona = new Persona("Gorka", 70);
/* console.log(persona);
console.log(persona.nombre); */
//persona.saludo();
//console.log(persona.obtenNombre());
//console.log(persona.#obtenEdad());imposible acceder
//console.log(persona._isDeveloper);//imposible acceder

//Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

//Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
//Quiero cambiar la edad de la persona
persona.setEdad(15);
console.log(persona.getEdad());