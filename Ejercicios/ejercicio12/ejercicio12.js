function fibonacci(num) {
    let arrayNumeros = [1, 1], fibo = 0;
    for (let i = 1; fibo < num; i++) {
        fibo = arrayNumeros[i - 1] + arrayNumeros[i];
        arrayNumeros = [...arrayNumeros, fibo];
    }
    return arrayNumeros;
}

const array = fibonacci(6);
console.log(array);