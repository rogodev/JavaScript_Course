// ============================================
// OBJETO Math EN JAVASCRIPT
// ============================================

// El objeto Math en JavaScript ofrece funciones y constantes matemáticas.
// No se utiliza como constructor, es decir, no se hace "new Math()".

console.log("========== CONSTANTES ==========");

// Math.PI: devuelve el valor de π (pi)
console.log("PI:", Math.PI);

// Math.E: base de los logaritmos naturales
console.log("E:", Math.E);

// Math.SQRT2: raíz cuadrada de 2
console.log("Raíz de 2:", Math.SQRT2);

// Math.LN2: logaritmo natural de 2
console.log("ln(2):", Math.LN2);

// Math.LOG10E: logaritmo en base 10 de E
console.log("log10(e):", Math.LOG10E);

console.log("\n========== FUNCIONES MATEMÁTICAS ==========");

// Math.abs(x): valor absoluto
console.log("Valor absoluto de -7:", Math.abs(-7));

// Math.ceil(x): redondea hacia arriba
console.log("Ceil de 4.3:", Math.ceil(4.3));

// Math.floor(x): redondea hacia abajo
console.log("Floor de 4.7:", Math.floor(4.7));

// Math.round(x): redondea al entero más cercano
console.log("Round de 4.5:", Math.round(4.5));

// Math.trunc(x): elimina la parte decimal
console.log("Trunc de 4.9:", Math.trunc(4.9));

// Math.sqrt(x): raíz cuadrada
console.log("Raíz cuadrada de 25:", Math.sqrt(25));

// Math.cbrt(x): raíz cúbica
console.log("Raíz cúbica de 27:", Math.cbrt(27));

// Math.pow(base, exponente): potencia
console.log("2 elevado a 3:", Math.pow(2, 3));

// Math.max(...valores): máximo valor
console.log("Máximo de 3, 7, 2:", Math.max(3, 7, 2));

// Math.min(...valores): mínimo valor
console.log("Mínimo de 3, 7, 2:", Math.min(3, 7, 2));

console.log("\n========== FUNCIONES TRIGONOMÉTRICAS ==========");

// Math.sin(x), Math.cos(x), Math.tan(x): funciones trigonométricas
// Importante: los ángulos están en RADIANES
console.log("Seno de PI/2:", Math.sin(Math.PI / 2));  // = 1
console.log("Coseno de PI:", Math.cos(Math.PI));      // = -1
console.log("Tangente de 0:", Math.tan(0));           // = 0

console.log("\n========== LOGARITMOS ==========");

// Math.log(x): logaritmo natural (base e)
console.log("Logaritmo natural de 10:", Math.log(10));

// Math.log10(x): logaritmo base 10
console.log("Logaritmo base 10 de 100:", Math.log10(100));

// Math.log2(x): logaritmo base 2
console.log("Logaritmo base 2 de 8:", Math.log2(8));

console.log("\n========== FUNCIONES ALEATORIAS ==========");

// Math.random(): número aleatorio entre 0 (incluido) y 1 (excluido)
console.log("Número aleatorio entre 0 y 1:", Math.random());

// Para obtener un entero aleatorio entre dos valores, por ejemplo entre 1 y 10:
function getRandomInt(min, max) {
    // min incluido, max excluido
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log("Entero aleatorio entre 1 y 10:", getRandomInt(1, 11));

console.log("\n========== EJEMPLO FINAL ==========");

// Supón que queremos redondear al alza el precio total de una compra
let precioTotal = 23.47;
let precioFinal = Math.ceil(precioTotal);
console.log("Precio final redondeado hacia arriba:", precioFinal);

// Calcular la hipotenusa de un triángulo rectángulo con catetos 3 y 4
let hipotenusa = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
console.log("Hipotenusa:", hipotenusa);  // debería ser 5
