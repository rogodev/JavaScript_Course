// Ejemplo completo sobre funciones en JavaScript

// 1. Declaración de una función básica
// Una función es un bloque de código reutilizable
function saludar() {
    console.log("Hola, bienvenido a JavaScript!");
}
// Llamando a la función
saludar();

// 2. Función con parámetros
// Se pueden pasar valores a una función
function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludarUsuario("Carlos");

// 3. Función con retorno de valor
// Se puede devolver un resultado con return
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 7);
console.log("La suma es:", resultado);

// 4. Funciones anónimas
// Funciones sin nombre asignadas a una variable
let multiplicar = function(a, b) {
    return a * b;
};
console.log("Multiplicación:", multiplicar(3, 4));

// 5. Funciones flecha (Arrow Functions)
// Sintaxis más corta para definir funciones
const dividir = (a, b) => a / b;
console.log("División:", dividir(10, 2));

// 6. Parámetros por defecto
// Se pueden asignar valores por defecto a los parámetros
function potencia(base, exponente = 2) {
    return Math.pow(base, exponente);
}
console.log("Potencia por defecto:", potencia(3));
console.log("Potencia con exponente:", potencia(3, 3));

// 7. Funciones dentro de funciones
// Se pueden definir funciones dentro de otras funciones
function operacionCompleja(a, b) {
    function resta(x, y) {
        return x - y;
    }
    let suma = a + b;
    return resta(suma, 5);
}
console.log("Operación compleja:", operacionCompleja(10, 8));

// 8. Funciones que retornan funciones
// Se puede devolver otra función dentro de una función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}
let duplicar = crearMultiplicador(2);
console.log("Duplicar 5:", duplicar(5));

// 9. Funciones de orden superior
// Las funciones pueden recibir otras funciones como parámetros
function operar(a, b, operacion) {
    return operacion(a, b);
}
console.log("Suma con función de orden superior:", operar(10, 5, sumar));
console.log("Multiplicación con función de orden superior:", operar(4, 3, multiplicar));

// 10. Funciones recursivas
// Una función que se llama a sí misma para resolver problemas repetitivos
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial de 5:", factorial(5));

// 11. Uso de 'this' en funciones
// 'this' hace referencia al objeto que llama la función
let persona = {
    nombre: "Ana",
    edad: 25,
    presentar: function() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
};
persona.presentar();

// 12. Funciones autoejecutables (IIFE)
// Se ejecutan inmediatamente después de ser declaradas
(function() {
    console.log("Esta función se ejecuta automáticamente");
})();

// 13. Closure (cierre)
// Una función que mantiene acceso a variables externas
function contador() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
}
let incrementar = contador();
console.log("Contador:", incrementar());
console.log("Contador:", incrementar());

// 14. Callback (función pasada como argumento)
function procesarUsuario(nombre, callback) {
    console.log("Procesando usuario:", nombre);
    callback();
}
procesarUsuario("Laura", () => console.log("Usuario procesado correctamente."));
