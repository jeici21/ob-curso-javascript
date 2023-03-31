//Sentencias Switch
let nota = 5;
switch (nota) {
    case 5:
        console.log("Buen trabajo, ¡sobresaliente!");
        break;
    case 4:
        console.log("Buen trabajo pero podrías haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un insuficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito más para la próxima");
        break;
    default:
        console.log("Error");
        break;
}