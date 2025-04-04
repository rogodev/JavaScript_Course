/*Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:*/

// escribe tu respuesta acá
const imprimirArreglo = (array)=>{
    for(array_ in array){
        console.log(array[array_]);
    }
}
// código de prueba
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))
// 1
// Hola
// 2
// Mundo