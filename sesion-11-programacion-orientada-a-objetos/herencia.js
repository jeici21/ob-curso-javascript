//Inheritance - Herencia
class Persona {
    _nombre;
    _edad;
    constructor(nombre, edad) {//atributos de la clase
        this._nombre = nombre;//inicializando atributos
        this._edad = edad;//this para aclarar que nos referimos a los de la clase
    }

    saludo() {//método de la clase
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);//llamando atributos de la clase Persona
        this.lenguaje = lenguaje;
    }

    saludo() {//Override - Sobrescribe la llamada anterior
        super.saludo();//llamando contenido de la llamada anterior
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevodev = new Desarrollador("Gorka", 34, "Javascript");
console.log(nuevodev);
nuevodev.saludo();

//Polimorfismo => Varias formas