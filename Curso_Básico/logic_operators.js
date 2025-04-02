/**
 * Operadores Lógicos y de Comparación en JavaScript
 * -------------------------------------------------
 * JavaScript ofrece operadores de comparación para evaluar expresiones
 * y operadores lógicos para combinar múltiples condiciones.
 */

/**
 * 1. Operadores de Comparación
 * Se utilizan para comparar valores y devuelven un valor booleano (true o false).
 */
console.log("--- Operadores de Comparación ---");
console.log("Igualdad ==", 5 == "5"); // true (compara solo el valor)
console.log("Estrictamente igual ===", 5 === "5"); // false (compara valor y tipo)
console.log("Diferente !=", 5 != "5"); // false (compara solo el valor)
console.log("Estrictamente diferente !==", 5 !== "5"); // true (compara valor y tipo)
console.log("Mayor que >", 10 > 5); // true
console.log("Menor que <", 10 < 5); // false
console.log("Mayor o igual >=", 10 >= 10); // true
console.log("Menor o igual <=", 10 <= 5); // false

/**
 * 2. Operadores Lógicos
 * Se utilizan para evaluar múltiples condiciones.
 */
console.log("--- Operadores Lógicos ---");
console.log("AND (&&)", true && false); // false (ambos deben ser true)
console.log("OR (||)", true || false); // true (basta con que uno sea true)
console.log("NOT (!)", !true); // false (invierte el valor booleano)

// Uso combinado de operadores lógicos
let edad = 25;
let tienePermiso = true;
console.log("¿Puede acceder?", edad >= 18 && tienePermiso); // true

/**
 * 3. Operadores de Comparación en Condicionales
 */
let temperatura = 30;
if (temperatura > 25) {
    console.log("Hace calor");
} else {
    console.log("El clima es agradable");
}

/**
 * 4. Operadores Lógicos en Expresiones Complejas
 */
let esMayor = edad >= 18;
let tieneEntrada = true;
let puedeEntrar = esMayor && tieneEntrada;
console.log("¿Puede entrar al evento?", puedeEntrar);

/**
 * 5. Uso de Operadores en Funciones
 */
function verificarAcceso(usuario, clave) {
    return usuario === "admin" && clave === "1234";
}
console.log("Acceso concedido:", verificarAcceso("admin", "1234")); // true

/**
 * Conclusión:
 * - Los operadores de comparación permiten evaluar valores y tipos.
 * - Los operadores lógicos combinan múltiples condiciones.
 * - Se pueden usar en estructuras de control y funciones.
 */