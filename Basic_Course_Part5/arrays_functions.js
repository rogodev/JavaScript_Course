// ==============================
// FUNCIONES DE ARRAYS EN JAVASCRIPT
// ==============================

console.log("=== CREACIÓN Y ACCESO ===");

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // "manzana" (acceder al primer elemento)
console.log(frutas.length); // 3 (cantidad de elementos)


// ==============================
// AÑADIR Y ELIMINAR ELEMENTOS
// ==============================

console.log("\n=== AÑADIR Y ELIMINAR ===");

frutas.push("kiwi");        // Añadir al final
console.log(frutas);        // ["manzana", "banana", "naranja", "kiwi"]

frutas.pop();               // Eliminar del final
console.log(frutas);        // ["manzana", "banana", "naranja"]

frutas.unshift("sandía");   // Añadir al principio
console.log(frutas);        // ["sandía", "manzana", "banana", "naranja"]

frutas.shift();             // Eliminar del principio
console.log(frutas);        // ["manzana", "banana", "naranja"]


// ==============================
// BÚSQUEDA
// ==============================

console.log("\n=== BÚSQUEDA ===");

console.log(frutas.includes("banana"));  // true
console.log(frutas.indexOf("naranja"));  // 2
console.log(frutas.indexOf("kiwi"));     // -1 (no está)


// ==============================
// RECORRER ARRAYS
// ==============================

console.log("\n=== RECORRER ===");

frutas.forEach((fruta, indice) => {
    console.log(indice + ": " + fruta);
});


// ==============================
// TRANSFORMAR ARRAYS
// ==============================

console.log("\n=== MAP ===");

let longitudes = frutas.map(fruta => fruta.length);
console.log(longitudes);  // [7, 6, 7] (longitud de cada palabra)


// ==============================
// FILTRAR ELEMENTOS
// ==============================

console.log("\n=== FILTER ===");

let largas = frutas.filter(fruta => fruta.length > 6);
console.log(largas);  // ["manzana", "naranja"]


// ==============================
// BUSCAR ELEMENTO QUE CUMPLA UNA CONDICIÓN
// ==============================

console.log("\n=== FIND ===");

let conB = frutas.find(fruta => fruta.startsWith("b"));
console.log(conB); // "banana"


// ==============================
// COMPROBAR SI TODOS / ALGUNOS CUMPLEN UNA CONDICIÓN
// ==============================

console.log("\n=== EVERY & SOME ===");

console.log(frutas.every(fruta => typeof fruta === "string")); // true
console.log(frutas.some(fruta => fruta.length > 10));          // false


// ==============================
// REDUCIR A UN SOLO VALOR
// ==============================

console.log("\n=== REDUCE ===");

let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acum, num) => acum + num, 0);
console.log(suma); // 10


// ==============================
// ORDENAR Y REVERTIR
// ==============================

console.log("\n=== SORT & REVERSE ===");

let letras = ["d", "a", "c", "b"];
letras.sort(); // orden alfabético
console.log(letras); // ["a", "b", "c", "d"]

letras.reverse(); // orden inverso
console.log(letras); // ["d", "c", "b", "a"]


// ==============================
// EXTRAER Y MODIFICAR PARTES
// ==============================

console.log("\n=== SLICE & SPLICE ===");

let animales = ["gato", "perro", "conejo", "pájaro"];
let algunos = animales.slice(1, 3); // copia desde el índice 1 hasta 2
console.log(algunos); // ["perro", "conejo"]

animales.splice(2, 1, "hamster"); // elimina 1 desde índice 2, añade "hamster"
console.log(animales); // ["gato", "perro", "hamster", "pájaro"]


// ==============================
// COMBINAR Y CONVERTIR
// ==============================

console.log("\n=== CONCAT & JOIN ===");

let numeros1 = [1, 2];
let numeros2 = [3, 4];
let todos = numeros1.concat(numeros2);
console.log(todos); // [1, 2, 3, 4]

let texto = frutas.join(" - ");
console.log(texto); // "manzana - banana - naranja"
