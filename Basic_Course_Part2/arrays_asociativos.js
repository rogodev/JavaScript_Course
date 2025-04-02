/**
 * Arrays Asociativos en JavaScript
 * --------------------------------
 * En otros lenguajes (como PHP) se usan arrays asociativos para almacenar pares clave-valor.
 * En JavaScript, los arrays con índices no numéricos se convierten en objetos.
 *
 * Para trabajar con estructuras de clave-valor en JavaScript se suelen usar:
 * 1. Objetos literales
 * 2. La clase Map (introducida en ES6) para casos más avanzados
 */

/** 
 * 1. Uso de Objetos Literales como "arrays asociativos"
 */
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
};

console.log("Nombre:", persona.nombre); // Acceso mediante notación de punto
console.log("Edad:", persona["edad"]); // Acceso mediante notación de corchetes

// Agregar o modificar propiedades:
persona.ocupacion = "Desarrollador";
persona["nacionalidad"] = "Española";
console.log("Persona actualizada:", persona);

// Iterar sobre las propiedades del objeto:
for (let clave in persona) {
    if (persona.hasOwnProperty(clave)) {
        console.log(clave + ": " + persona[clave]);
    }
}

/**
 * 2. Uso de Map para trabajar con claves-valor
 * Map permite usar cualquier tipo de dato como clave y mantiene el orden de inserción.
 */
let mapa = new Map();

// Agregar elementos al Map
mapa.set("nombre", "Ana");
mapa.set("apellido", "García");
mapa.set("edad", 25);

// Acceder a un elemento del Map
console.log("Nombre (Map):", mapa.get("nombre"));

// Iterar sobre un Map
mapa.forEach((valor, clave) => {
    console.log(clave + ": " + valor);
});

// Comprobar si existe una clave en el Map
console.log("¿Tiene clave 'edad'?", mapa.has("edad"));

// Obtener el número de elementos en el Map
console.log("Tamaño del Map:", mapa.size);

/**
 * Conclusión:
 * - En JavaScript, los arrays con índices de tipo string se manejan como objetos.
 * - Para estructuras de clave-valor se recomienda usar objetos literales o Map.
 * - Map ofrece ventajas como claves de cualquier tipo y preservación del orden de inserción.
 */
