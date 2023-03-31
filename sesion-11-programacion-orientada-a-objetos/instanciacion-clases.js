class Persona {
    constructor(nombre, edad, isDeveloper) {//atributos de la clase
        this.nombre = nombre;//inicializando atributos
        this.edad = edad;//this para aclarar que nos referimos a los de la clase
        this.isDeveloper = isDeveloper;//sin this solo nos referiríamos a variables comunes
    }

    saludo() {//método de la clase
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}

const nueva_persona = new Persona("Gorka", 34, true);//creando objeto de tipo de la clase
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60;//inicializar
console.log(typeof numero);

let persona_2 = new Persona("María", 34, false);//instanciar, para objetos
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);

//instanceof -> similar a typeof pero para clases