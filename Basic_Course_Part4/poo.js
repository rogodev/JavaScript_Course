/**
 * Programación Orientada a Objetos (POO) en JavaScript
 *
 * Definición: La POO es un paradigma de programación basado en la creación de "objetos",
 * los cuales tienen propiedades (atributos) y métodos (funciones dentro del objeto).
 *
 * Principales conceptos de la POO:
 * 1. Clases
 * 2. Objetos
 * 3. Encapsulación
 * 4. Herencia
 * 5. Polimorfismo
 * 6. Abstracción
 */

/**
 * 1. Clases y Objetos
 * Una clase es una plantilla para crear objetos.
 * Un objeto es una instancia de una clase.
 */
class Persona {
    // Constructor: se ejecuta al crear un nuevo objeto
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad
        this.edad = edad; // Propiedad
    }

    // Método: una función dentro de la clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Instanciación: Crear objetos a partir de la clase
const persona1 = new Persona("Juan", 25);
const persona2 = new Persona("Ana", 30);

// Uso de los métodos del objeto
persona1.saludar(); // Hola, mi nombre es Juan y tengo 25 años.
persona2.saludar(); // Hola, mi nombre es Ana y tengo 30 años.

/**
 * 2. Encapsulación
 * La encapsulación oculta los detalles internos de un objeto y permite acceder a sus datos solo a través de métodos específicos.
 */
class CuentaBancaria {
    constructor(saldoInicial) {
        let saldo = saldoInicial; // Variable privada
        
        // Método público para obtener el saldo
        this.getSaldo = function () {
            return saldo;
        };

        // Método público para depositar dinero
        this.depositar = function (cantidad) {
            if (cantidad > 0) {
                saldo += cantidad;
                console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
            } else {
                console.log("La cantidad debe ser positiva.");
            }
        };
    }
}

const cuenta1 = new CuentaBancaria(1000);
console.log(cuenta1.getSaldo()); // 1000
cuenta1.depositar(500); // Depósito exitoso. Nuevo saldo: 1500

/**
 * 3. Herencia
 * Permite que una clase herede propiedades y métodos de otra clase.
 */
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // Llamar al constructor de la clase padre
        this.curso = curso;
    }

    // Método específico de Estudiante
    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}.`);
    }
}

// Crear un objeto de la subclase
const estudiante1 = new Estudiante("Carlos", 20, "Matemáticas");

// Llamar métodos heredados y propios
estudiante1.saludar(); // Hola, mi nombre es Carlos y tengo 20 años.
estudiante1.estudiar(); // Carlos está estudiando Matemáticas.

/**
 * 4. Polimorfismo
 * Permite que una subclase redefina un método de la clase padre.
 */
class Profesor extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad);
        this.materia = materia;
    }

    // Sobreescribir el método saludar
    saludar() {
        console.log(`Hola, soy el profesor ${this.nombre} y enseño ${this.materia}.`);
    }
}

const profesor1 = new Profesor("Laura", 40, "Historia");
profesor1.saludar(); // Hola, soy el profesor Laura y enseño Historia.

/**
 * 5. Abstracción
 * La abstracción permite crear clases que definen métodos sin implementarlos directamente.
 */
class Figura {
    constructor(nombre) {
        if (this.constructor === Figura) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
        this.nombre = nombre;
    }
    
    calcularArea() {
        throw new Error("Este método debe ser implementado en una subclase.");
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super("Círculo");
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

const miCirculo = new Circulo(5);
console.log(`El área del círculo es ${miCirculo.calcularArea().toFixed(2)}`); // 78.54

/**
 * 6. Métodos estáticos
 * Los métodos estáticos pertenecen a la clase y no a una instancia específica.
 */
class Utilidades {
    static generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
console.log(Utilidades.generarNumeroAleatorio(1, 10));

/**
 * 7. Getters y Setters
 * Permiten controlar el acceso a las propiedades de un objeto.
 */
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this._precio = precio;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio debe ser mayor que cero.");
        }
    }
}

const producto1 = new Producto("Laptop", 1000);
console.log(producto1.precio); // 1000
producto1.precio = 1200; // Cambia el precio
console.log(producto1.precio); // 1200