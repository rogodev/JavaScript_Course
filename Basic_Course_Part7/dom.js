/***********************************************************************
 * DOM - Document Object Model (Modelo de Objetos del Documento)
 *
 * El DOM es una interfaz de programación para documentos HTML y XML.
 * Permite que los scripts accedan y actualicen el contenido, la estructura,
 * y el estilo de los documentos.
 *
 * ¿Cómo funciona el DOM?
 * -----------------------
 * - Cuando se carga una página web, el navegador crea un modelo interno del 
 *   documento en forma de árbol, donde cada nodo representa una parte del
 *   contenido (por ejemplo, elementos, atributos, texto, etc.).
 *
 * - Cada etiqueta HTML (como <body>, <div>, <p>, etc.) se convierte en un objeto
 *   que forma parte del árbol del DOM. Esto significa que con JavaScript puedes:
 *     • Leer o modificar el contenido (por ejemplo, cambiar el texto dentro de un <p>).
 *     • Añadir, eliminar o reorganizar elementos.
 *     • Gestionar eventos (como clics, entrada de teclado, etc.) para interactuar 
 *       con el usuario.
 *
 * - La comunicación entre el código JavaScript y el HTML se realiza a través del DOM, 
 *   haciendo que la página web sea dinámica y responda a las acciones del usuario.
 *
 * Ejemplos de métodos y propiedades del DOM:
 * --------------------------------------------
 *   • document.createElement(tag): Crea un nuevo elemento HTML.
 *   • document.getElementById(id): Devuelve un elemento con el ID especificado.
 *   • element.textContent: Propiedad para obtener o establecer el contenido de texto de un elemento.
 *   • element.appendChild(child): Añade un elemento hijo al elemento actual.
 *   • element.addEventListener(event, callback): Registra una función para ejecutar
 *       cuando ocurre el evento especificado.
 *
 * Con el DOM, es posible modificar la estructura de una página web en tiempo real,
 * ofreciendo la base para crear interfaces dinámicas y ricas en interactividad.
 *
 * Nota: El DOM es esencial para el desarrollo frontend y permite que el contenido
 * y la presentación se separen de la lógica de la aplicación, haciendo posible
 * construir aplicaciones web complejas.
 *
 *
 * Métodos de selección de elementos del DOM:
 * --------------------------------------------
 * Estos métodos permiten acceder a los elementos del HTML para leerlos o modificarlos.
 * Aquí tienes los más comunes:
 *
 * 1. document.getElementById("id")
 *    - Devuelve el elemento que tiene ese ID.
 *    - Ejemplo:
 *        const parrafo = document.getElementById("valor");
 *        parrafo.textContent = "Nuevo texto";
 *
 * 2. document.getElementsByClassName("clase")
 *    - Devuelve una colección (HTMLCollection) de todos los elementos con esa clase.
 *    - Ejemplo:
 *        const botones = document.getElementsByClassName("boton");
 *        botones[0].textContent = "Botón modificado";
 *
 * 3. document.getElementsByTagName("etiqueta")
 *    - Devuelve una colección de todos los elementos con esa etiqueta.
 *    - Ejemplo:
 *        const parrafos = document.getElementsByTagName("p");
 *        parrafos[0].style.color = "blue";
 *
 * 4. document.querySelector("selector")
 *    - Devuelve el primer elemento que coincide con el selector CSS indicado.
 *    - Ejemplo:
 *        const titulo = document.querySelector("h1");
 *        titulo.style.fontSize = "32px";
 *
 * 5. document.querySelectorAll("selector")
 *    - Devuelve todos los elementos que coinciden con el selector CSS (NodeList).
 *    - Ejemplo:
 *        const todosLosBotones = document.querySelectorAll("button");
 *        todosLosBotones.forEach(boton => boton.style.margin = "5px");
 ***********************************************************************/

// ===============================
// Crear elementos del DOM desde JS
// ===============================

// Creamos un título (h1)
const titulo = document.createElement("h1");
titulo.textContent = "Contador Interactivo";

// Creamos un párrafo para mostrar el valor del contador
const valor = document.createElement("p");
valor.id = "valor";            // Le damos un ID para accederlo después
valor.textContent = "0";       // Valor inicial

// Creamos el botón de sumar
const botonSumar = document.createElement("button");
botonSumar.textContent = "Sumar";  // Texto del botón

// Creamos el botón de restar
const botonRestar = document.createElement("button");
botonRestar.textContent = "Restar";

// Creamos el botón de reiniciar
const botonReset = document.createElement("button");
botonReset.textContent = "Reiniciar";

// Añadimos todos los elementos al <body>
document.body.appendChild(titulo);
document.body.appendChild(valor);
document.body.appendChild(botonSumar);
document.body.appendChild(botonRestar);
document.body.appendChild(botonReset);

// ===============================
// Lógica del contador
// ===============================

// Variable que almacena el valor actual del contador
let contador = 0;

// Función que actualiza el valor del párrafo en pantalla
function actualizarValor() {
  valor.textContent = contador;

  // Cambiamos el color del texto según el valor
  if (contador > 0) {
    valor.style.color = "green";
  } else if (contador < 0) {
    valor.style.color = "red";
  } else {
    valor.style.color = "black";
  }
}

// ===============================
// Eventos de los botones
// ===============================

botonSumar.addEventListener("click", () => {
  contador++;
  actualizarValor();
});

botonRestar.addEventListener("click", () => {
  contador--;
  actualizarValor();
});

botonReset.addEventListener("click", () => {
  contador = 0;
  actualizarValor();
});

// ===============================
// Ejemplos prácticos de selección de elementos del DOM
// ===============================

// Supongamos que ya tenemos este elemento en el HTML:
// <p id="mensaje" class="info">Hola mundo</p>

// 1. getElementById()
// Busca un elemento por su ID
const parrafoPorId = document.getElementById("valor");
parrafoPorId.textContent = "Texto cambiado con getElementById";

// 2. getElementsByClassName()
// Devuelve una colección de elementos con la misma clase
// Vamos a añadir clases para probarlo:
botonSumar.className = "boton";
botonRestar.className = "boton";
botonReset.className = "boton";

// Ahora seleccionamos todos los elementos con la clase "boton"
const botones = document.getElementsByClassName("boton");
botones[0].style.backgroundColor = "lightgreen";
botones[1].style.backgroundColor = "lightcoral";
botones[2].style.backgroundColor = "lightblue";

// 3. getElementsByTagName()
// Selecciona todos los elementos con una etiqueta determinada
const parrafos = document.getElementsByTagName("p");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.fontFamily = "Arial";
}

// 4. querySelector()
// Selecciona el primer elemento que coincida con un selector CSS
const primerBoton = document.querySelector("button");
primerBoton.style.border = "2px solid black";

// También puedes buscar por clase o ID como en CSS
const parrafoValor = document.querySelector("#valor");
parrafoValor.style.fontSize = "24px";

// 5. querySelectorAll()
// Selecciona todos los elementos que coinciden con un selector CSS
const todosLosBotones = document.querySelectorAll("button");
todosLosBotones.forEach((btn, index) => {
  btn.textContent += ` (${index + 1})`; // Añade número al texto
});

// ===============================
// Métodos para definir, obtener y eliminar atributos
// ===============================

/*
Los elementos HTML tienen atributos como "id", "class", "href", "src", "type", etc.
JavaScript nos permite manipular estos atributos con los siguientes métodos:

1. setAttribute(nombre, valor)
   → Establece un nuevo atributo o modifica uno existente.

2. getAttribute(nombre)
   → Devuelve el valor de un atributo.

3. removeAttribute(nombre)
   → Elimina un atributo del elemento.

Veamos ejemplos usando los botones del contador.
*/

// 1. setAttribute()
// Añadir un atributo personalizado y modificar uno existente
botonSumar.setAttribute("title", "Haz clic para sumar 1");
botonRestar.setAttribute("title", "Haz clic para restar 1");
botonReset.setAttribute("title", "Haz clic para reiniciar");

botonSumar.setAttribute("data-accion", "sumar");
botonRestar.setAttribute("data-accion", "restar");
botonReset.setAttribute("data-accion", "reset");

// También podemos modificar atributos estándar
valor.setAttribute("class", "contador-valor");

// 2. getAttribute()
// Obtener el valor de un atributo
const accionSumar = botonSumar.getAttribute("data-accion");
console.log("Acción del botón sumar:", accionSumar); // Mostraría: "sumar"

const claseValor = valor.getAttribute("class");
console.log("Clase del párrafo valor:", claseValor); // Mostraría: "contador-valor"

// 3. removeAttribute()
// Eliminar un atributo de un elemento
valor.removeAttribute("class");
console.log("Clase eliminada del valor:", valor.getAttribute("class")); // null


// ===============================
// Atributos globales en el DOM (explicación y ejemplos)
// ===============================

/*
Los atributos globales son atributos que se pueden aplicar a cualquier elemento HTML,
y permiten controlar cosas como:

  • id              → Identificador único del elemento.
  • class           → Clase(s) CSS para aplicar estilos.
  • style           → Estilos en línea directamente en el HTML.
  • title           → Texto emergente al pasar el cursor por encima.
  • hidden          → Oculta el elemento del documento visual.
  • tabindex        → Orden de navegación con el teclado (tecla Tab).
  • contenteditable → Indica si el contenido del elemento se puede editar.
  • draggable       → Permite arrastrar el elemento.
  • lang            → Define el idioma del contenido.
*/

// 1. id y class
titulo.setAttribute("id", "titulo-contador");
titulo.setAttribute("class", "titulo-principal");

console.log(titulo.id);    // "titulo-contador"
console.log(titulo.className); // "titulo-principal"

// 2. style (estilos en línea)
// Las propiedades de css dejan de nombrarse con guiones y se utiliza el estilo camel Case
titulo.style.textAlign = "center";               // Estilo en JS (más común)
titulo.setAttribute("style", "margin-top: 20px"); // También se puede hacer así (menos común)

// 3. title (tooltip emergente)
valor.setAttribute("title", "Este número cambia al usar los botones");

// 4. hidden (ocultar un elemento)
valor.hidden = true;    // Oculta el elemento (como si no estuviera)
setTimeout(() => {
  valor.hidden = false; // Lo muestra otra vez después de 2 segundos
}, 2000);

// 5. tabindex (orden de tabulación con teclado)
botonSumar.setAttribute("tabindex", "1");
botonRestar.setAttribute("tabindex", "2");
botonReset.setAttribute("tabindex", "3");

// 6. contenteditable (editable por el usuario)
const nota = document.createElement("p");
nota.textContent = "Haz doble clic aquí para editar este texto";
nota.setAttribute("contenteditable", "true");
document.body.appendChild(nota);

// 7. draggable (permite arrastrar)
titulo.setAttribute("draggable", "true");

// 8. lang (idioma del contenido)
titulo.setAttribute("lang", "es");

// 9. data-* (atributos personalizados)
botonSumar.setAttribute("data-info", "Botón que suma");
console.log(botonSumar.dataset.info); // Accede directamente al atributo data-info



// ===============================
// Atributos específicos de los elementos <input> (con ejemplos)
// ===============================

/*
Los inputs tienen muchos atributos útiles. Aquí tienes los más comunes:

  • type            → Define el tipo de input (text, number, checkbox, etc.)
  • value           → Valor actual del input.
  • placeholder     → Texto gris que se muestra como guía.
  • disabled        → Inactiva el input (no se puede usar).
  • readonly        → El usuario no puede modificar el valor, pero sí copiarlo.
  • required        → Hace que el campo sea obligatorio para enviar un formulario.
  • checked         → Marca una casilla o radio.
  • min, max        → Valores mínimos y máximos (para inputs de número o fecha).
  • step            → Valor incremental (ej. de 5 en 5).
  • maxlength       → Número máximo de caracteres.
  • minlength       → Número mínimo de caracteres.
*/

// Creamos un input de ejemplo
const inputNombre = document.createElement("input");
inputNombre.setAttribute("type", "text");
inputNombre.setAttribute("placeholder", "Escribe tu nombre");
inputNombre.setAttribute("maxlength", "20");
inputNombre.setAttribute("required", "true");

document.body.appendChild(document.createElement("br")); // salto de línea
document.body.appendChild(inputNombre);

// Podemos cambiar el tipo a number o date, por ejemplo
// inputNombre.type = "number";

// Obtener o modificar su valor con JavaScript
inputNombre.value = "Rodrigo";  // Establece un valor inicial
console.log("Valor del input:", inputNombre.value); // Lo muestra por consola

// Deshabilitar el input durante 2 segundos
inputNombre.disabled = true;
setTimeout(() => {
  inputNombre.disabled = false;
}, 2000);

// Hacerlo de solo lectura (se puede seleccionar pero no escribir)
inputNombre.readOnly = true;
setTimeout(() => {
  inputNombre.readOnly = false;
}, 2000);

// ===============================
// Otros ejemplos con diferentes tipos de input
// ===============================

// Input tipo número con min, max y step
const inputEdad = document.createElement("input");
inputEdad.type = "number";
inputEdad.min = "18";
inputEdad.max = "100";
inputEdad.step = "1";
inputEdad.placeholder = "Edad (18 a 100)";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(inputEdad);

// Checkbox
const inputAcepto = document.createElement("input");
inputAcepto.type = "checkbox";
inputAcepto.checked = true; // Lo marcamos por defecto
inputAcepto.id = "acepto";

const labelAcepto = document.createElement("label");
labelAcepto.textContent = " Acepto los términos";
labelAcepto.setAttribute("for", "acepto");

document.body.appendChild(document.createElement("br"));
document.body.appendChild(inputAcepto);
document.body.appendChild(labelAcepto);

// Leer si está marcado o no
console.log("¿Aceptado?:", inputAcepto.checked);

// Input tipo contraseña
const inputClave = document.createElement("input");
inputClave.type = "password";
inputClave.placeholder = "Contraseña";
inputClave.required = true;

document.body.appendChild(document.createElement("br"));
document.body.appendChild(inputClave);
