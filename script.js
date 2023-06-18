/*Desarrollo de Tarea-6
Para ello:

1)Mostrar la secuencia de Fibonacci:
    -Entre los númers 0 y 1000
    -Entre los numeros pares entre 0 y 1000
    -Entre los númers impares entre 0 y mil*/

/*Defino la funcion que calcula la secuencia de Fibonacci, la definiré de forma recursiva*/
/*DOM--> n (un numero)
  REC--> el numero de Fibonacci de n
  usaré recursion de cola, así no se apilan los llamados*/
function fibonacci(n,acum1,acum2){
    if(n == 0){
        return acum1;
    }
    if(n == 1){
        return acum2;
    }
    return fibonacci(n-1,acum2,acum1+acum2);
}

/*Ahora, como debo calcular la sucesión para todos los numeros del 0 al 1000.. usaré un ciclo for que los muestre por consola*/
function fibonacciNumeros(cotaSuperior){ /*en este caso, cotaSuperior = 1000*/

    for(var i = 0; i <= cotaSuperior; i++){
        console.log(fibonacci(i,0,1));
    }
} 

/*calculo para los numeros del 0 al 1000*/
console.log("------------------------------------------------\n");
console.log("              NUMEROS 0-1000                     ");
fibonacciNumeros(1000);
console.log("------------------------------------------------\n");
console.log("              NUMEROS PARES  0-1000                     ");
/*2) Implemento lo mismo que en la función anterior, sin embargo, haré distinción entre numeros pares e impares*/
/*comparten el mismo dominio, sin embargo, el ciclo for ha de cambiar*/

function fibonacciNumerosPares(n){
    for(var i = 0; i <= n; i++){
            if(i % 2 == 0){
                console.log(fibonacci(i,0,1));
            }
    }

}

fibonacciNumerosPares(1000);

console.log("--------------------------------------------------\n");
console.log("              NUMEROS IMPARES  0-1000                     ");

/*3) Para los numeros impares */
function fibonacciNumerosImpares(n){
    for(var i = 0; i <= n; i++){
            if(i % 2!= 0){
                console.log(fibonacci(i,0,1));
            }
        }
}

fibonacciNumerosImpares(1000);


/*2) Segunda parte de la tarea.
retornar otro arreglo con todo a mayúsculas*/
let pokemon =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]

/*defino una funcion que retorne otro arreglo con todo a mayúsculas*/

let arrayUpper = pokemon.map(element => element.toUpperCase());
/*lo asigno a una variable y lo muestro por consola*/

console.log("--------------------------------------------------\n");
console.log("              ARRAY MAYÚSCULAS                     ");
console.log(arrayUpper);
console.log("--------------------------------------------------\n");

/*Parte 3
Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo
fuego. */
let pokemon2 = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

/*defino un filtro, usando  filter*/
/*filtro los que son tipo fuego*/

console.log("--------------------------------------------------\n");
console.log("              FILTRO DE TIPO FUEGO                     ");
let pokemonFuego = pokemon2.filter(element => element.tipo == 'Fuego');
console.log(pokemonFuego);