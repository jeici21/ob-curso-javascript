function* generaId() {//La función generadora no terminará hasta alcanzar el return
    let id = 0;
    while (true) {
        id++;
        if (id === 10) {
            return id;
        }
        yield id//Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();
console.log(gen.next().value);//accediendo al valor retornado
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);