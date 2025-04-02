/**
 * Concatenación de cadenas en JavaScript
 * --------------------------------------
 * La concatenación es el proceso de unir dos o más cadenas de texto.
 * JavaScript permite concatenar cadenas utilizando:
 * 1. El operador `+`
 * 2. El operador `+=`
 * 3. Template literals (con backticks ` `)
 */

// 1. Concatenación con el operador `+`
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido; // Une las cadenas con un espacio
console.log("Concatenación con +:", nombreCompleto);

// 2. Concatenación con `+=` (agregar contenido a una variable existente)
let mensaje = "Hola, ";
mensaje += nombre;
mensaje += "! Bienvenido a nuestra web.";
console.log("Concatenación con +=:", mensaje);

// 3. Concatenación con Template Literals (uso de backticks ` `)
let edad = 25;
let saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log("Concatenación con template literals:", saludo);

/**
 * 3.5. Concatenación con el método `concat()`
 * `concat()` es un método de strings que une dos o más cadenas.
 */
let saludoConcat = "Hola".concat(", ", nombre, " ", apellido, "! ", "Bienvenido a nuestra web.");
console.log("Concatenación con concat():", saludoConcat);

/**
 * 4. Concatenación de múltiples líneas
 * Template literals permiten concatenar texto en varias líneas sin necesidad de `\n`.
 */
let mensajeLargo = `Hola, ${nombre}.
Espero que estés teniendo un buen día.
Nos vemos pronto!`;
console.log("Concatenación de múltiples líneas:", mensajeLargo);

/**
 * 5. Concatenación de números y strings
 * Cuando se usa `+` con un número y una cadena, el número se convierte en cadena.
 */
let numero = 5;
let textoNumero = "El número es: " + numero;
console.log("Concatenación con números:", textoNumero);

// Sin embargo, usando template literals, evitamos este problema:
let textoNumero2 = `El número es: ${numero}`;
console.log("Concatenación con números y template literals:", textoNumero2);

/**
 * 6. Concatenación en una función
 * Se puede usar en funciones para devolver cadenas formateadas.
 */
function presentarUsuario(nombre, apellido, edad) {
    return `Me llamo ${nombre} ${apellido} y tengo ${edad} años.`;
}
console.log(presentarUsuario("Ana", "García", 30));

/**
 * 7. Concatenación con `join()` en arrays
 * Cuando tenemos un array de cadenas, podemos unir sus elementos con `join()`
 */
let palabras = ["JavaScript", "es", "genial"];
let frase = palabras.join(" "); // Une los elementos con un espacio
console.log("Concatenación con join():", frase);

/**
 * Conclusión:
 * - El operador `+` y `+=` funcionan bien para concatenaciones simples.
 * - Template literals son más flexibles y legibles, especialmente para múltiples líneas.
 * - `join()` es útil para unir elementos de un array en una cadena de texto.
 */