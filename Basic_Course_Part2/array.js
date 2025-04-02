/**
 * Arrays en JavaScript
 * --------------------
 * Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
 * Los elementos de un array pueden ser de diferentes tipos de datos (números, cadenas, objetos, etc.).
 */

/**
 * 1. Creación de un array
 * Se puede crear un array utilizando corchetes [].
 */
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "banana", "cereza"];
let mixto = [10, "hola", true, null];
console.log(numeros);
console.log(frutas);
console.log(mixto);

/**
 * 2. Acceso a los elementos de un array
 * Se accede a los elementos de un array usando su índice (comienza en 0).
 */
console.log("Primer número:", numeros[0]); // 1
console.log("Segunda fruta:", frutas[1]); // banana
console.log("Elemento mixto:", mixto[2]); // true

/**
 * 3. Cambiar valores en un array
 * Se puede modificar un elemento de un array asignando un nuevo valor a su índice.
 */
frutas[1] = "kiwi";
console.log("Array modificado:", frutas);

/**
 * 4. Propiedades y métodos comunes de los arrays
 * Los arrays tienen propiedades y métodos útiles para manipular sus elementos.
 */
console.log("Longitud del array de números:", numeros.length); // 5
console.log("Método push() para agregar un elemento:", frutas.push("naranja"));
console.log("Array después de push:", frutas);
console.log("Método pop() para eliminar el último elemento:", frutas.pop());
console.log("Array después de pop:", frutas);
console.log("Método shift() para eliminar el primer elemento:", frutas.shift());
console.log("Array después de shift:", frutas);
console.log("Método unshift() para agregar un elemento al principio:", frutas.unshift("uva"));
console.log("Array después de unshift:", frutas);

/**
 * 5. Métodos de búsqueda en arrays
 * Algunos métodos permiten encontrar elementos o verificar si existen en el array.
 */
let tieneCereza = frutas.includes("cereza");
console.log("¿Frutas incluye cereza?", tieneCereza); // false
let indiceBanana = frutas.indexOf("banana");
console.log("Índice de banana:", indiceBanana); // -1 (no encontrado)

/**
 * 6. Iteración sobre un array
 * Se puede recorrer un array utilizando bucles como `for`, `forEach`, etc.
 */
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta en índice", i, ":", frutas[i]);
}

frutas.forEach(function(fruta, index) {
    console.log("Fruta en índice", index, ":", fruta);
});

/**
 * 7. Métodos avanzados
 * Los arrays también tienen métodos como `map()`, `filter()`, `reduce()`, entre otros.
 */
let numerosDobles = numeros.map(function(num) {
    return num * 2;
});
console.log("Números doblados:", numerosDobles);

let frutasConA = frutas.filter(function(fruta) {
    return fruta.startsWith("a");
});
console.log("Frutas que comienzan con 'a':", frutasConA);

/**
 * 8. Conclusión
 * - Los arrays son muy útiles para almacenar colecciones de elementos.
 * - Tienen muchos métodos integrados para facilitar la manipulación y búsqueda de datos.
 * - Es importante conocer cómo acceder, modificar y recorrer los arrays.
 */
