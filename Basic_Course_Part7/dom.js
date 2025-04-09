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