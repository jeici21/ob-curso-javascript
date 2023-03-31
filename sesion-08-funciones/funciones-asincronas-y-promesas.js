//Funciones asíncronas
async function miAsinc() {
    //Hace una llamada a una base de datos externa
    //Puede darnos algún error
    await new Promise(resolve => setTimeout(resolve, 5000));//setTimeOut para dar un plazo de tiempo antes de ejecutarse
    console.log("Hola soy una promesa");
}

miAsinc();

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);//número aleatorio entre 0 y 1
    //Si está todo correcto
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
});

miPromesa.then(() => console.log("Se ha ejecutado de forma correcta"))//si se ejecutó correctamente ocurrirá esto
    .catch(() => console.log("ERROR"))//si no se ejecutó correctamente se ejecutará esto
    .finally(() => console.log("Yo me ejecuto siempre"));//se ejecutará sin importar si se ejecutó correctamente o no