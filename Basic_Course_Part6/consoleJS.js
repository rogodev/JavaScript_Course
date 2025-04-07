// ============================
// FUNCIONES BÁSICAS DE LA CONSOLA
// ============================

// 1. console.log(): Imprime mensajes normales en la consola.
console.log("Hola, esto es un mensaje normal");

// 2. console.info(): Similar a log, pero se usa para info general.
console.info("Este es un mensaje informativo");

// 3. console.warn(): Muestra una advertencia en amarillo.
console.warn("¡Ojo! Esto es una advertencia");

// 4. console.error(): Muestra un mensaje de error en rojo.
console.error("Esto es un error");

// 5. console.clear(): Limpia la consola.
console.clear(); // Úsalo para limpiar la consola antes de nuevas pruebas

// 6. console.table(): Muestra datos en forma de tabla (ideal para arrays y objetos)
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Marta", nota: 9 }
];
console.table(alumnos);

// 7. console.group() y console.groupEnd(): Agrupa mensajes para organizar la salida
console.group("Mensajes agrupados");
console.log("Primer mensaje");
console.log("Segundo mensaje");
console.groupEnd();

// 8. console.time() y console.timeEnd(): Mide cuánto tiempo tarda un bloque de código
console.time("Tiempo de suma");
let suma = 0;
for (let i = 0; i < 1_000_000; i++) suma += i;
console.timeEnd("Tiempo de suma");

// 9. console.count(): Cuenta cuántas veces se llama con una etiqueta
for (let i = 0; i < 3; i++) {
    console.count("Contador");
}

// ============================
// FUNCIONES DE DEPURACIÓN Y SEGUIMIENTO
// ============================

// 10. console.assert(): Solo muestra algo si una condición es falsa
let edad = 20;
console.assert(edad >= 18, "No es mayor de edad"); // No muestra nada
edad = 15;
console.assert(edad >= 18, "No es mayor de edad"); // Muestra mensaje

// 11. console.trace(): Muestra el rastro (stack trace) de cómo se llegó hasta aquí
function a() {
    b();
}
function b() {
    c();
}
function c() {
    console.trace("Rastro de funciones");
}
a();

// ============================
// FUNCIONES ÚTILES EN LA CONSOLA
// ============================

// 12. $0, $1, $2... Referencias a elementos seleccionados en el inspector
// - $0 es el último elemento inspeccionado en el HTML
// - Puedes probar en la consola: console.log($0)

// 13. $$(): Selecciona múltiples elementos (como document.querySelectorAll)
// - Por ejemplo: $$("div") devuelve todos los <div> del documento

// 14. $(): Similar a document.querySelector()
// - Ejemplo: $("h1") devuelve el primer <h1> del documento

// 15. copy(): Copia un valor directamente al portapapeles
let mensaje = "Texto copiado desde la consola";
copy(mensaje); // Ahora puedes pegarlo con Ctrl+V

// ============================
// TRUCOS CON OBJETOS Y JSON
// ============================

const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

console.log("Accediendo a propiedades:");
console.log(persona.nombre);
console.log(persona["ciudad"]);

console.log("Mostrando el objeto:");
console.log(persona);

// Convertir a JSON (texto plano)
const jsonString = JSON.stringify(persona);
console.log("JSON:", jsonString);

// Convertir de JSON a objeto
const nuevoObjeto = JSON.parse(jsonString);
console.log("Objeto nuevo desde JSON:", nuevoObjeto);

// ============================
// EJEMPLOS AVANZADOS
// ============================

// Formateo de mensajes
console.log("%cTexto grande y rojo", "color: red; font-size: 20px; font-weight: bold");

// Emojis en consola 😎
console.log("🚀 Todo listo para despegar");

// Mensaje con varios argumentos
console.log("Nombre:", persona.nombre, "| Edad:", persona.edad);

// Contador de errores
let errores = ["404", "500", "403"];
errores.forEach((error, index) => {
    console.warn(`Error ${index + 1}: Código ${error}`);
});

// ============================
// RETO PERSONAL PARA TI 😁
// ============================
// Prueba a crear una función que reciba un array de personas y muestre en consola:
// - Un mensaje por persona
// - Un console.table con todas
// - Y que mida cuánto tarda en recorrerlas

function mostrarPersonas(personas) {
    console.time("TiempoTotal");
    personas.forEach((p, i) => {
        console.log(`Persona ${i + 1}: ${p.nombre}, ${p.edad} años`);
    });
    console.table(personas);
    console.timeEnd("TiempoTotal");
}

const lista = [
    { nombre: "Juan", edad: 21 },
    { nombre: "Sofía", edad: 24 },
    { nombre: "Lucía", edad: 18 }
];
mostrarPersonas(lista);
