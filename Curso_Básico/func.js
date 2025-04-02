/**
 * Interacción básica con el usuario en JavaScript
 * -----------------------------------------------
 * JavaScript permite interactuar con el usuario a través de alertas,
 * cuadros de diálogo y confirmaciones.
 */

/**
 * Alert (alerta emergente)
 * Muestra un cuadro de diálogo con un mensaje y un botón de "Aceptar".
 */
alert("¡Bienvenido a nuestra página!");

/**
 * Prompt (entrada de usuario)
 * Muestra un cuadro de diálogo que solicita una entrada al usuario.
 */
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "! Espero que tengas un gran día.");

/**
 * Confirm (cuadro de confirmación)
 * Muestra un cuadro de diálogo con "Aceptar" y "Cancelar".
 */
let confirmacion = confirm("¿Deseas continuar?");
if (confirmacion) {
    alert("Has elegido continuar.");
} else {
    alert("Has cancelado la acción.");
}

/**
 * Función básica: Sumar dos números ingresados por el usuario
 */
function sumarDosNumeros() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let suma = num1 + num2;
    alert("La suma de " + num1 + " y " + num2 + " es " + suma);
}

// Llamamos a la función para probarla
sumarDosNumeros();

/**
 * Función básica: Mostrar un mensaje en la consola
 */
function mostrarMensajeEnConsola() {
    console.log("Este es un mensaje en la consola del navegador.");
}

// Llamamos a la función para probarla
mostrarMensajeEnConsola();
