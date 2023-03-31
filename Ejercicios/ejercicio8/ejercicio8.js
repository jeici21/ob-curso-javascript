function verdadero() {
    console.log(true);
}

async function miFuncionAsincrona() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}

function* pares() {
    let id = 0;
    while (true) {
        id += 2;
        yield console.log(id);
    }
}

const gen = pares();
verdadero(), miFuncionAsincrona(), gen.next(), gen.next(), gen.next(), gen.next(), gen.next();