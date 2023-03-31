let nombre = "Jorge";
let apellido = "Castro";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroDeLetras = estudiante.length;
let primeraLetra = nombre[0];
let ultimaLetra = apellido.slice(-1);
let sinEspacios = estudiante.replace(" ", "");
let nombreEnEstudiante = estudiante.includes(nombre);
console.log(nombre, apellido, estudiante, estudianteMayus, estudianteMinus, numeroDeLetras, primeraLetra,
    ultimaLetra, sinEspacios, nombreEnEstudiante);