/**
 * Uso de camelCase en JavaScript
 * ------------------------------
 * camelCase es una convención de nomenclatura en la que la primera palabra 
 * comienza con minúscula y las siguientes palabras inician con mayúscula, sin espacios.
 * Se usa ampliamente en JavaScript para nombrar variables y funciones.
 */

// 1. Ejemplo de nombres de variables en camelCase
let nombreCompleto = "Juan Pérez";
let edadUsuario = 25;
let estaAutenticado = true;
console.log("Nombre:", nombreCompleto);
console.log("Edad:", edadUsuario);
console.log("Autenticado:", estaAutenticado);

// 2. Uso en funciones
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área del rectángulo:", calcularAreaRectangulo(5, 10));

// 3. Uso en objetos
let usuario = {
    nombreCompleto: "Ana García",
    edadUsuario: 30,
    estaAutenticado: false
};
console.log("Usuario:", usuario);

/**
 * 4. Reglas y buenas prácticas de camelCase:
 * - Siempre iniciar con minúscula.
 * - No usar espacios ni guiones bajos (_).
 * - Cada palabra adicional comienza con mayúscula.
 * - Usar nombres descriptivos para mejorar la legibilidad.
 */

/**
 * 5. Diferencia con otras convenciones:
 * - PascalCase: Similar a camelCase, pero la primera letra también es mayúscula (Ej: NombreCompleto).
 * - snake_case: Usa guiones bajos entre palabras (Ej: nombre_completo).
 * - kebab-case: Usa guiones medios, común en nombres de archivos (Ej: nombre-completo.js).
 */

console.log("Ejemplo de convenciones de nombres:");
console.log("Camel Case: nombreCompleto");
console.log("Pascal Case: NombreCompleto");
console.log("Snake Case: nombre_completo");
console.log("Kebab Case: nombre-completo");