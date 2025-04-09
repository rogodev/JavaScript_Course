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



// ===============================
// Uso de createDocumentFragment (eficiencia en el DOM)
// ===============================

/*
¿Qué es createDocumentFragment?

Cuando quieres añadir muchos elementos al DOM, hacerlo uno por uno con appendChild()
puede ser ineficiente, ya que cada inserción puede provocar un reflujo (repaint/reflow)
en la página, lo que impacta el rendimiento.

Para evitar esto, se puede usar document.createDocumentFragment(), que actúa como un
"contenedor temporal" en memoria. Es como una mini-página invisible donde puedes
crear y organizar los nodos antes de insertarlos todos de una sola vez.

Ventajas:
  • No se renderiza nada hasta que se inserta en el DOM real.
  • Permite hacer cambios sin afectar el rendimiento.
  • Ideal para insertar listas largas o muchos elementos a la vez.

*/

// ===============================
// Ejemplo práctico: Añadir 100 elementos con DocumentFragment
// ===============================

const fragmento = document.createDocumentFragment(); // Contenedor temporal

for (let i = 1; i <= 100; i++) {
  const item = document.createElement("p");
  item.textContent = `Párrafo número ${i}`;
  item.classList.add("item-fragmento");
  fragmento.appendChild(item); // Lo añadimos al fragmento, NO al DOM aún
}

// Una vez listo todo el contenido, lo insertamos de golpe
contenedor.appendChild(fragmento);

/*
Si hubiéramos hecho contenedor.appendChild(item) dentro del bucle directamente,
el navegador haría 100 repintados/reflujos. Con DocumentFragment, solo hace 1.
*/

// ===============================
// Estilos para los elementos del fragmento (opcional)
// ===============================

const estiloFragmento = document.createElement("style");
estiloFragmento.textContent = `
  .item-fragmento {
    font-size: 12px;
    margin: 2px 0;
    color: #333;
  }
`;
document.head.appendChild(estiloFragmento);



// ===============================
// Métodos para obtener y modificar elementos hijos (childs)
// ===============================

/*
Cuando un elemento contiene otros dentro (por ejemplo un <div> con <p>, <ul>, <img>...),
podemos acceder a esos elementos "hijos" usando diferentes propiedades y métodos del DOM.

Existen varias formas de acceder y modificar esos elementos:
  • element.childNodes        → Devuelve TODOS los nodos hijos (incluye texto, comentarios, etc.)
  • element.children          → Devuelve SOLO los elementos HTML hijos
  • element.firstChild        → Devuelve el primer nodo hijo (podría ser un texto)
  • element.firstElementChild → Devuelve el primer hijo que sea ELEMENTO
  • element.lastChild         → Último nodo hijo
  • element.lastElementChild  → Último hijo que sea ELEMENTO
  • element.hasChildNodes()   → Devuelve true si el elemento tiene hijos
  • element.removeChild(hijo) → Elimina un hijo específico
  • element.replaceChild(nuevo, viejo) → Reemplaza un hijo por otro
*/

// ===============================
// Ejemplo: Analizar y modificar los hijos del contenedor
// ===============================

console.log("childNodes:", contenedor.childNodes);           // Todos los nodos (textos, espacios, elementos)
console.log("children:", contenedor.children);               // Solo los elementos (h2, p, img, ul, ...)

console.log("Primer hijo (firstChild):", contenedor.firstChild);                  // Podría ser un texto
console.log("Primer elemento hijo (firstElementChild):", contenedor.firstElementChild); // Elemento real

console.log("¿Tiene hijos?", contenedor.hasChildNodes());     // true o false

// ===============================
// Reemplazar el primer párrafo por uno nuevo
// ===============================

const nuevoP = document.createElement("p");
nuevoP.textContent = "⚠️ Este párrafo reemplazó al original con replaceChild().";
nuevoP.style.color = "red";

// Buscamos el segundo hijo del contenedor que debería ser el <p>
const parrafoOriginal = contenedor.children[1]; // h2 está en la posición 0

contenedor.replaceChild(nuevoP, parrafoOriginal); // Lo reemplazamos

// ===============================
// Eliminar el último hijo si es un botón
// ===============================

const ultimo = contenedor.lastElementChild;

if (ultimo.tagName === "BUTTON") {
  contenedor.removeChild(ultimo);
  console.log("Se eliminó el botón con removeChild");
}

// ===============================
// Recorrer todos los elementos hijos
// ===============================

for (let hijo of contenedor.children) {
  console.log("Elemento hijo:", hijo.tagName);
  hijo.style.borderBottom = "1px dashed #ccc"; // Añadir estilo a cada hijo
}




// ===============================
// Propiedades para acceder a PADRES y HERMANOS (siblings)
// ===============================

/*
Además de acceder a los hijos, también podemos movernos hacia arriba (padres)
y hacia los lados (hermanos) en el árbol del DOM.

Propiedades importantes:
  • element.parentNode              → Devuelve el nodo padre
  • element.parentElement           → Devuelve el padre si es un elemento (a veces es más seguro)
  • element.previousSibling         → Hermano anterior (puede ser texto o comentario)
  • element.previousElementSibling  → Hermano anterior que sea ELEMENTO
  • element.nextSibling             → Hermano siguiente (puede ser texto o comentario)
  • element.nextElementSibling      → Hermano siguiente que sea ELEMENTO
*/  

// ===============================
// Ejemplo práctico: trabajar con un <li> de la lista de frutas
// ===============================

// Seleccionamos el segundo elemento de la lista (Banana)
const segundoLi = lista.children[1]; // índice 1 → "Banana"
segundoLi.style.fontWeight = "bold"; // Lo destacamos

// Padre del <li>
const padreDeLi = segundoLi.parentElement;
console.log("Padre del <li>:", padreDeLi.tagName); // Debería ser <ul>

// Hermano anterior y siguiente
const anterior = segundoLi.previousElementSibling;
const siguiente = segundoLi.nextElementSibling;

if (anterior) {
  anterior.style.color = "orange";
  anterior.textContent += " (anterior)";
}

if (siguiente) {
  siguiente.style.color = "blue";
  siguiente.textContent += " (siguiente)";
}

// Mostramos en consola todos los datos
console.log("Elemento actual:", segundoLi.textContent);
console.log("Hermano anterior:", anterior ? anterior.textContent : "No hay");
console.log("Hermano siguiente:", siguiente ? siguiente.textContent : "No hay");

// También podemos subir al padre del contenedor y modificarlo (el <body>)
const padreContenedor = contenedor.parentElement;
padreContenedor.style.backgroundColor = "#fefefe"; // Cambio sutil al fondo





// ===============================
// Propiedad: element.closest(selector)
// ===============================

/*
¿Qué hace closest?

  • Busca hacia ARRIBA en el árbol del DOM (es decir, hacia los padres y abuelos).
  • Devuelve el PRIMER elemento ancestro que coincida con el selector dado (clase, ID, etiqueta…).
  • Si no encuentra ninguno, devuelve null.

Es muy útil cuando tienes un elemento dentro de una estructura y necesitas subir a un contenedor específico.

Sintaxis:
  element.closest("selector-css")
*/

// ===============================
// Ejemplo práctico
// ===============================

// Creamos una estructura anidada como ejemplo:
const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta";

const contenidoTarjeta = document.createElement("div");
contenidoTarjeta.className = "contenido";

const botonCerrar = document.createElement("button");
botonCerrar.textContent = "Cerrar tarjeta";
botonCerrar.className = "cerrar";

contenidoTarjeta.appendChild(botonCerrar);
tarjeta.appendChild(contenidoTarjeta);
document.body.appendChild(tarjeta);

// Estilos para visualizarlo mejor
const estilosExtra = document.createElement("style");
estilosExtra.textContent = `
  .tarjeta {
    background-color: #fff4cc;
    padding: 15px;
    border: 2px solid orange;
    border-radius: 8px;
    margin-top: 20px;
    max-width: 300px;
  }

  .contenido {
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .cerrar {
    margin-top: 10px;
    background-color: crimson;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
document.head.appendChild(estilosExtra);

// ===============================
// Usar closest para cerrar la tarjeta desde el botón
// ===============================

botonCerrar.addEventListener("click", (e) => {
  // Buscamos el primer padre que tenga la clase "tarjeta"
  const tarjetaCercana = e.target.closest(".tarjeta");

  if (tarjetaCercana) {
    tarjetaCercana.remove(); // Eliminamos la tarjeta completa
    console.log("Tarjeta eliminada con closest");
  }
});