// Ejemplo de bucles en JavaScript con explicaciones

// 1. Bucle FOR
// Se usa cuando sabemos cuántas veces queremos iterar
console.log("Bucle FOR");
for (let i = 0; i < 5; i++) {
    console.log("Iteración número:", i);
}

// Otro ejemplo: recorriendo un array con for
console.log("\nRecorriendo un array con FOR");
let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}

// 2. Bucle WHILE
// Se ejecuta mientras la condición sea verdadera
console.log("\nBucle WHILE");
let contador = 0;
while (contador < 5) {
    console.log("Iteración número:", contador);
    contador++; // Aumentamos el contador para evitar un bucle infinito
}

// Otro ejemplo: contar regresivamente con while
console.log("\nCuenta regresiva con WHILE");
let cuenta = 5;
while (cuenta > 0) {
    console.log("Cuenta atrás:", cuenta);
    cuenta--;
}

// 3. Bucle DO...WHILE
// Similar a while, pero se ejecuta al menos una vez
console.log("\nBucle DO...WHILE");
let num = 0;
do {
    console.log("Iteración número:", num);
    num++;
} while (num < 5);

// Otro ejemplo: solicitar un número mayor que 10 al usuario
console.log("\nSolicitando número mayor a 10 con DO...WHILE");
let numeroIngresado;
do {
    numeroIngresado = parseInt(prompt("Ingresa un número mayor a 10:"));
} while (numeroIngresado <= 10);
console.log("Número válido ingresado:", numeroIngresado);

// 4. Bucle FOR...OF
// Se usa para recorrer arrays o iterables
console.log("\nBucle FOR...OF");
let numeros = [10, 20, 30, 40, 50];
for (let numero of numeros) {
    console.log("Número:", numero);
}

// Otro ejemplo: recorriendo una cadena de texto
console.log("\nRecorriendo una cadena de texto con FOR...OF");
let palabra = "JavaScript";
for (let letra of palabra) {
    console.log("Letra:", letra);
}

// 5. Bucle FOR...IN
// Se usa para recorrer las propiedades de un objeto
console.log("\nBucle FOR...IN");
let persona = {nombre: "Juan", edad: 30, ciudad: "Madrid"};
for (let clave in persona) {
    console.log(clave + ":", persona[clave]);
}

// Otro ejemplo: modificando propiedades de un objeto
console.log("\nModificando valores en un objeto con FOR...IN");
let coche = {marca: "Toyota", modelo: "Corolla", año: 2022};
for (let propiedad in coche) {
    coche[propiedad] = coche[propiedad].toString().toUpperCase();
}
console.log("Coche modificado:", coche);

// 6. Uso de BREAK y CONTINUE en los bucles
console.log("\nUso de BREAK y CONTINUE");
console.log("Ejemplo con BREAK (detener el bucle)");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Se detiene en 5");
        break;
    }
    console.log(i);
}

console.log("\nEjemplo con CONTINUE (saltar una iteración)");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Se salta el 5");
        continue;
    }
    console.log(i);
}

//Podemos colocarle un nombre al bucle for y hacer el uso de break o continuo con dicho for, a pesar de estar en bucles internos
forEjemplo : 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === 5) {
            console.log("Se detiene en 5");
            break forEjemplo; //Este break sale del bucle principal que es el que se llama forEjemplo, si usamos break normal saldría solamente de este bucle for
        }
        console.log(i);
    }
    if (i === 6) {
        console.log("Se detiene en 5");
    }
    console.log(i);
}

// NOTA: Evita los bucles infinitos asegurándote de que la condición de salida se cumpla
