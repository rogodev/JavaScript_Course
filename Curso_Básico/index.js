/**
 * Tipos de datos básicos en JavaScript
 * -----------------------------------
 * JavaScript es un lenguaje de tipado dinámico, lo que significa que
 * no es necesario declarar el tipo de una variable explícitamente.
 */

// 1. Tipos de datos primitivos
let numero = 42; // Número entero
let decimal = 3.14; // Número decimal
let texto = "Hola, mundo"; // Cadena de texto (string)
let booleano = true; // Valor booleano (true o false)
let nulo = null; // Valor nulo (ausencia de valor)
let indefinido; // Variable declarada pero sin valor asignado
let noEsUnNumero = NaN; // Not-a-Number, resultado de operaciones inválidas
let simbolo = Symbol("descripcion"); // Tipo Symbol, único e inmutable

// 2. Tipo de dato compuesto
let objeto = { nombre: "Juan", edad: 25 }; // Objeto con propiedades
let array = [1, 2, 3, 4, 5]; // Array o lista de valores

/**
 * Operadores aritméticos
 * ----------------------
 * Se utilizan para realizar cálculos matemáticos.
 */
let a = 10;
let b = 5;

console.log("Suma:", a + b); // 15
console.log("Resta:", a - b); // 5
console.log("Multiplicación:", a * b); // 50
console.log("División:", a / b); // 2
console.log("Módulo (resto):", a % b); // 0
console.log("Exponente:", a ** b); // 100000 (10^5)

/**
 * Operadores de asignación
 * ------------------------
 * Se utilizan para asignar valores a las variables.
 */
let x = 10; // Asignación básica
x += 5; // Equivalente a x = x + 5 (x ahora es 15)
x -= 3; // Equivalente a x = x - 3 (x ahora es 12)
x *= 2; // Equivalente a x = x * 2 (x ahora es 24)
x /= 4; // Equivalente a x = x / 4 (x ahora es 6)
x %= 3; // Equivalente a x = x % 3 (x ahora es 0)

/**
 * Tipos de variables: var, let y const
 * ------------------------------------
 * En JavaScript existen tres formas de declarar variables:
 */

// var: Tiene un alcance global o de función (no se recomienda usarlo en código moderno)
var variableGlobal = "Soy una variable global";

// let: Tiene un alcance de bloque y permite reasignación de valores
let variableLet = "Soy una variable let";
variableLet = "Ahora tengo otro valor"; // Esto es válido

// const: Tiene un alcance de bloque y NO permite reasignación de valores
const variableConst = "Soy una constante";
// variableConst = "Esto dará error"; // Esto NO es válido

console.log(variableGlobal);
console.log(variableLet);
console.log(variableConst);

/**
 * Conclusión:
 * - JavaScript tiene varios tipos de datos primitivos y compuestos.
 * - Los operadores aritméticos permiten realizar cálculos matemáticos.
 * - Los operadores de asignación facilitan la modificación de variables.
 * - Es recomendable usar `let` y `const` en lugar de `var` por razones de seguridad y claridad en el código.
 * - `null`, `undefined`, `NaN` y `Symbol` son tipos especiales con usos específicos en JavaScript.
 */
