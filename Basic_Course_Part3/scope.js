/**
 * Scope en JavaScript: Global, Local y de Bloque
 */

// Variable global: accesible en todo el script
var globalVar = "Soy global";

function ejemploScope() {
    // Variable local (de función): solo accesible dentro de la función
    var localVar = "Soy local";
    console.log(globalVar); // Accede a la variable global
    console.log(localVar);  // Accede a la variable local
}

ejemploScope();
// console.log(localVar); // Error: localVar no está definida fuera de la función


// Uso de let y const dentro de un bloque
function bloqueScope() {
    if (true) {
        var varDentroDeBloque = "var dentro de bloque";
        let letDentroDeBloque = "let dentro de bloque";
        const constDentroDeBloque = "const dentro de bloque";
    }
    
    console.log(varDentroDeBloque); // ✅ 'var' ignora el bloque y es accesible
    // console.log(letDentroDeBloque); // ❌ Error: let no es accesible fuera del bloque
    // console.log(constDentroDeBloque); // ❌ Error: const no es accesible fuera del bloque
}

bloqueScope();


// Diferencia entre var y let en bucles
console.log("Ejemplo con var en un bucle:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Imprime 3, 3, 3 (var no tiene scope de bloque)
}

console.log("Ejemplo con let en un bucle:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000); // Imprime 0, 1, 2 (let tiene scope de bloque)
}

// Scope en funciones anidadas
function padre() {
    let mensaje = "Hola desde padre";
    
    function hijo() {
        console.log(mensaje); // ✅ Puede acceder a 'mensaje' de la función padre
    }
    
    hijo();
}

padre();
// console.log(mensaje); // ❌ Error: mensaje solo existe dentro de la función padre
