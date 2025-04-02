/**
 * Condicionales en JavaScript
 * ---------------------------
 * Los condicionales permiten ejecutar diferentes bloques de código 
 * dependiendo de si una condición se evalúa como verdadera o falsa.
 */

/**
 * 1. if - else
 * Ejecuta un bloque de código si la condición es verdadera.
 */
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

/**
 * 2. if - else if - else
 * Se usa cuando hay múltiples condiciones posibles.
 */
let temperatura = 30;
if (temperatura > 30) {
    console.log("Hace mucho calor.");
} else if (temperatura >= 20) {
    console.log("El clima es agradable.");
} else {
    console.log("Hace frío.");
}

/**
 * 3. Operador ternario (? :)
 * Es una forma corta de escribir un if-else.
 */
let esMayor = edad >= 18 ? "Sí, es mayor de edad." : "No, es menor de edad.";
console.log(esMayor);

/**
 * 4. switch
 * Se usa cuando hay múltiples valores específicos para evaluar.
 */
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de la semana.");
        break;
    case "viernes":
        console.log("Fin de la semana laboral.");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana.");
        break;
    default:
        console.log("Día normal.");
}

/**
 * 5. Uso de condicionales en funciones
 */
function verificarAcceso(rol) {
    if (rol === "admin") {
        return "Acceso concedido.";
    } else {
        return "Acceso denegado.";
    }
}
console.log(verificarAcceso("admin"));
console.log(verificarAcceso("usuario"));

/**
 * 6. Evaluación de múltiples condiciones con operadores lógicos
 */
let usuarioActivo = true;
let tienePermiso = false;
if (usuarioActivo && tienePermiso) {
    console.log("Acceso permitido.");
} else {
    console.log("Acceso restringido.");
}

/**
 * Conclusión:
 * - `if` se usa para tomar decisiones simples o múltiples con `else if`.
 * - El operador ternario simplifica condiciones en una línea.
 * - `switch` es útil cuando se comparan valores específicos.
 * - Se pueden combinar con operadores lógicos para condiciones más complejas.
 */