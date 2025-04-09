// ===============================
// Clases CSS y classList en el DOM (explicado con ejemplos)
// ===============================

/*
En HTML, los elementos pueden tener clases CSS usando el atributo "class":
  <div class="rojo grande"></div>

Desde JavaScript, podemos acceder y modificar estas clases de varias formas:
  • element.className          → Devuelve o establece TODAS las clases como string.
  • element.classList          → Propiedad especial que permite trabajar con las clases como lista.
*/

// Creamos un div que vamos a usar para demostrar los métodos
const caja = document.createElement("div");
caja.textContent = "Soy una caja con clases dinámicas";
caja.style.padding = "10px";
caja.style.border = "1px solid black";
document.body.appendChild(caja);

// ===============================
// 1. Usando className
// ===============================

caja.className = "fondo-azul texto-blanco"; // Establece varias clases
console.log("Clases actuales (className):", caja.className);

// También podemos sobrescribir todas las clases así:
// caja.className = "solo-una-clase";

// ===============================
// 2. Usando classList
// ===============================

/*
classList es más flexible que className.
Permite añadir, quitar o alternar clases sin reemplazar todas.
Es como una lista de clases con métodos útiles:
  • add(clase1, clase2, ...): añade una o más clases.
  • remove(clase1, clase2, ...): elimina una o más clases.
  • toggle(clase): si la clase existe, la quita; si no, la pone.
  • contains(clase): devuelve true si el elemento tiene esa clase.
  • replace(vieja, nueva): reemplaza una clase por otra.
*/

caja.classList.add("borde-redondo", "sombra");   // Añade 2 clases
console.log("¿Tiene la clase 'sombra'?", caja.classList.contains("sombra")); // true

caja.classList.remove("texto-blanco");           // Quita esa clase
caja.classList.toggle("subrayado");              // Como no está, la añade
caja.classList.toggle("subrayado");              // Como ya está, la quita

caja.classList.replace("fondo-azul", "fondo-verde"); // Reemplaza una clase por otra

console.log("Clases actuales (classList):", caja.classList.value); // Todas las clases

// ===============================
// 3. Estilos en CSS (opcional, para que se vea)
// ===============================

/*
Si pruebas este script en una página real, puedes añadir el siguiente CSS en un <style>:

<style>
  .fondo-azul    { background-color: blue; }
  .fondo-verde   { background-color: green; }
  .texto-blanco  { color: white; }
  .borde-redondo { border-radius: 10px; }
  .sombra        { box-shadow: 2px 2px 5px gray; }
  .subrayado     { text-decoration: underline; }
</style>

O bien puedes crear las clases desde JS como estilo dinámico si lo deseas.
*/

// Ejemplo de cómo crear estilos desde JS para que se vean los cambios: 
const estilo = document.createElement("style");
estilo.textContent = `
  .fondo-azul    { background-color: blue; }
  .fondo-verde   { background-color: green; }
  .texto-blanco  { color: white; }
  .borde-redondo { border-radius: 10px; }
  .sombra        { box-shadow: 2px 2px 5px gray; }
  .subrayado     { text-decoration: underline; }
`;
document.head.appendChild(estilo);




// ===============================
// Crear elementos en el DOM con JavaScript
// ===============================

/*
Con JavaScript puedes crear elementos HTML dinámicamente usando:
  • document.createElement("etiqueta")
Luego puedes:
  • Añadir contenido con textContent o innerHTML
  • Asignar atributos con setAttribute()
  • Añadir clases con className o classList
  • Insertarlos en el documento con appendChild() o insertBefore()
*/

// ===============================
// 1. Crear un contenedor principal
// ===============================

const contenedor = document.createElement("div");
contenedor.id = "contenedor-principal";             // Añadimos un ID
contenedor.className = "caja";                      // Añadimos una clase
contenedor.style.border = "1px solid black";
contenedor.style.padding = "10px";
contenedor.style.marginBottom = "10px";

// Lo añadimos al body
document.body.appendChild(contenedor);

// ===============================
// 2. Crear un título y un párrafo
// ===============================

const titulo = document.createElement("h2");
titulo.textContent = "Título dinámico desde JS";
contenedor.appendChild(titulo);

const parrafo = document.createElement("p");
parrafo.textContent = "Este párrafo fue creado y añadido con JavaScript.";
contenedor.appendChild(parrafo);

// ===============================
// 3. Crear una imagen con atributos
// ===============================

const imagen = document.createElement("img");
imagen.setAttribute("src", "https://via.placeholder.com/150");
imagen.setAttribute("alt", "Imagen de ejemplo");
imagen.style.display = "block";
imagen.style.margin = "10px 0";

contenedor.appendChild(imagen);

// ===============================
// 4. Crear una lista <ul> con elementos <li>
// ===============================

const lista = document.createElement("ul");

const frutas = ["Manzana", "Banana", "Pera"];
for (let fruta of frutas) {
  const item = document.createElement("li");
  item.textContent = fruta;
  lista.appendChild(item);
}

contenedor.appendChild(lista);

// ===============================
// 5. Crear un botón con evento
// ===============================

const boton = document.createElement("button");
boton.textContent = "Haz clic para añadir un nuevo párrafo";
boton.style.marginTop = "10px";

// Evento click: añadir un nuevo párrafo
boton.addEventListener("click", () => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Nuevo párrafo añadido al hacer clic.";
  contenedor.appendChild(nuevoParrafo);
});

contenedor.appendChild(boton);

// ===============================
// 6. Crear estilos con clases
// ===============================

const estilo = document.createElement("style");
estilo.textContent = `
  .caja {
    background-color: #f4f4f4;
    border-radius: 8px;
    max-width: 400px;
    font-family: sans-serif;
  }

  .caja h2 {
    color: darkblue;
  }

  .caja p {
    font-size: 14px;
  }

  .caja ul {
    padding-left: 20px;
  }

  .caja li {
    color: green;
  }

  .caja button {
    padding: 5px 10px;
    cursor: pointer;
  }
`;
document.head.appendChild(estilo);
