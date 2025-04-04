// === Métodos de cadenas en JavaScript con ejemplos detallados y explicaciones ===

const str = "Hola, mundo!"; // Cadena de ejemplo

// 1. Obtener la longitud de una cadena
console.log(str.length); // Devuelve 12 porque la cadena tiene 12 caracteres

// 2. Acceder a un carácter por su índice
console.log(str[0]); // "H" - Primera letra de la cadena
console.log(str.charAt(0)); // "H" - Método alternativo para obtener un carácter
console.log(str.charAt(str.length - 1)); // "!" - Último carácter de la cadena

// 3. Convertir a mayúsculas y minúsculas
console.log(str.toUpperCase()); // "HOLA, MUNDO!" - Convierte toda la cadena a mayúsculas
console.log(str.toLowerCase()); // "hola, mundo!" - Convierte toda la cadena a minúsculas

// 4. Buscar una subcadena dentro de otra
console.log(str.indexOf("mundo")); // 6 - Posición donde comienza "mundo"
console.log(str.lastIndexOf("o")); // 9 - Última aparición de "o" en la cadena
console.log(str.includes("Hola")); // true - Verifica si la cadena contiene "Hola"
console.log(str.startsWith("Hola")); // true - Verifica si la cadena empieza con "Hola"
console.log(str.endsWith("mundo!")); // true - Verifica si la cadena termina con "mundo!"

// 5. Extraer partes de una cadena
console.log(str.slice(0, 4)); // "Hola" - Extrae caracteres desde la posición 0 hasta la 4 (sin incluirla)
console.log(str.substring(0, 4)); // "Hola" - Funciona similar a slice, pero no acepta índices negativos
console.log(str.substr(6, 5)); // "mundo" - Extrae 5 caracteres desde la posición 6 //OBSOLETA

// 6. Reemplazar contenido en una cadena
console.log(str.replace("mundo", "JavaScript")); // "Hola, JavaScript!" - Reemplaza la primera coincidencia
console.log(str.replace(/o/g, "0")); // "H0la, mund0!" - Reemplaza todas las "o" con "0" usando una expresión regular

// 7. Dividir una cadena en un array
console.log(str.split(", ")); // ["Hola", "mundo!"] - Divide la cadena en base a ", "
console.log("manzana,pera,plátano".split(",")); // ["manzana", "pera", "plátano"] - Divide por comas
console.log("123-456-789".split("-")); // ["123", "456", "789"] - Divide por guiones

// 8. Repetir una cadena múltiples veces
console.log("Hola ".repeat(3)); // "Hola Hola Hola " - Repite la cadena 3 veces

// 9. Eliminar espacios en blanco alrededor de la cadena
console.log("   Hola   ".trim()); // "Hola" - Elimina espacios al inicio y al final
console.log("   Hola   ".trimStart()); // "Hola   " - Elimina solo los espacios del inicio
console.log("   Hola   ".trimEnd()); // "   Hola" - Elimina solo los espacios del final

// 10. Convertir otros valores a cadenas
console.log(String(123)); // "123" - Convierte un número en cadena
console.log((123).toString()); // "123" - Otra forma de conversión a cadena
console.log(true.toString()); // "true" - Convierte un booleano en cadena
console.log([1, 2, 3].toString()); // "1,2,3" - Convierte un array en una cadena

// 11. Comparación de cadenas alfabéticamente
console.log("a".localeCompare("b")); // -1 - "a" es menor que "b"
console.log("b".localeCompare("a")); // 1 - "b" es mayor que "a"
console.log("a".localeCompare("a")); // 0 - Son iguales

// 12. Interpolación de cadenas con template literals
const nombre = "Rodrigo";
console.log(`Hola, ${nombre}!`); // "Hola, Rodrigo!" - Inserta variables dentro de una cadena

// 13. Escapar caracteres especiales dentro de una cadena
console.log("Esta es una \"comilla\" dentro de un string."); // "Esta es una "comilla" dentro de un string."
console.log('Salto de línea:\nNueva línea'); // "Salto de línea:
//Nueva línea"
console.log("Ruta en Windows: C:\\Usuarios\\Nombre"); // "Ruta en Windows: C:\Usuarios\Nombre"

// 14. Trabajar con caracteres Unicode y emojis
console.log("❤️"); // ❤️ - Corazón en Unicode
console.log("🚀"); // 🚀 - Emoji de cohete en Unicode

// 15. Verificar si una cadena está vacía
function esVacia(cadena) {
  return cadena.length === 0; // Retorna true si la longitud de la cadena es 0
}
console.log(esVacia("")); // true - La cadena está vacía
console.log(esVacia("Hola")); // false - La cadena tiene contenido

// Ejemplos de padStart y padEnd en JavaScript

// padStart: Rellena al principio de la cadena
let numero = "7";
let numeroConCeros = numero.padStart(3, "0"); // Queremos que tenga longitud 3
console.log("padStart ejemplo:");
console.log(numeroConCeros); // "007"

// padEnd: Rellena al final de la cadena
let otroNumero = "7";
let numeroConCerosFinal = otroNumero.padEnd(3, "0"); // También queremos longitud 3
console.log("\npadEnd ejemplo:");
console.log(numeroConCerosFinal); // "700"

// Con texto más largo
let texto = "abc";
console.log("\nRellenando cadenas de texto con padStart y padEnd:");
console.log(texto.padStart(10, "-")); // "-------abc"
console.log(texto.padEnd(10, "-"));   // "abc-------"

// Relleno con múltiples caracteres
let rellenoLargo = texto.padStart(10, "123");
console.log("\nRelleno con una cadena más larga (padStart con '123'):");
console.log(rellenoLargo); // "1231231abc"

let rellenoFinal = texto.padEnd(10, "123");
console.log("\nRelleno con una cadena más larga (padEnd con '123'):");
console.log(rellenoFinal); // "abc1231231"

// Importante: si la cadena ya es más larga que el objetivo, no se modifica
let largo = "cadena muy larga";
console.log("\nSi la cadena ya es larga:");
console.log(largo.padStart(5, "*")); // No se cambia: "cadena muy larga" 


