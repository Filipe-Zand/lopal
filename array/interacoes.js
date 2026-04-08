const numeros = [45, 4, 9, 16, 25]

/*for( i = 0;  i < 5; i++){
    console.log(numeros[i])
}*/

//forEach() é um método que aplica uma função callback a cada elemento do array

numeros.forEach(valor => console.log(valor))

//map() é um método que cria um novo array com elementos retornados po uma callback function
let numeros2 = numeros.map(valor => valor * 2)
numeros2.forEach(valor => console.log(valor));

const numeros3 = numeros.filter(valor => valor > 18)
numeros3.forEach(valor => console.log(valor));

//reduce() produz apenas um único valor

console.log(
    numeros.reduce((total, valor) => total + valor )
)

//Apropriedade length retorna um número correspondente à quantidade de elementos de um arrey
console.log(numeros.length);
numeros.length = 5;
console.log(numeros);
console.log(numeros[5]);
numeros.length = 3;
console.log(numeros);

//ométodo push() acrescenta um elemento no fim do array
numeros.pop();

console.log(numeros);
//console.log(numeros);
//O método pop() remove um elemento no fim do array
numeros.pop()
numeros.push(25)
console.log(numeros)
