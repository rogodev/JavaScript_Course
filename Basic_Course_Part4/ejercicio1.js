/*A) Rodrigo entró a una tienda que vende móviles porque le pareció bastante bueno comprarse un nuevo móvil. 
De todos los modelos que hay disponibles en esa tienda, a Rodrigo le llamaron la atención 3 telefonos especificamente, 
El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutaente nada... pero claro:
el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, 
ahí entramos nosotros.

CREAR SOLUCIONES
-> Crear un sistema para mostrarle a Rodrigo las particularidades de los 3 móviles.
-> Cada móvil debe tener color, peso, resolución de pantalla, resolución de camara y memoria ram
-> Cada móvil debe poder encender, reiniciar, apagar, tomar fotos y grabar*/ 


class Movil {

    constructor(color,peso,resolucionPantalla,resolucionCamara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla =resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encedido = false;
    }

    mostrarInfo = ()=>{
        return `El teléfono tiene el color ${this.color}, pesa ${this.peso} gramos, tiene esta resolución por pantalla : ${this.resolucionPantalla}, tiene esta resolución en la cámara : ${this.resolucionCamara} y tiene esta memoria RAM : ${this.ram} <br>`;
    }

    encender = ()=>{
        if(!this.encedido){
            alert(`El teléfono móvil de color ${this.color} se ha encendido correctamente`);
            this.encedido = true;
        }
        else alert("El móvil ya estaba encendido");
        
    }

    apagar =() =>{
        if(this.encedido){
            alert(`El teléfono móvil de color ${this.color} se ha apagado correctamente`);
            this.encedido = false;
        }
        else alert("El móvil ya estaba apagado");
    }

    reiniciar = ()=>{
        if(!this.encedido){
            alert(`El teléfono móvil de color ${this.color} se está reiniciando...`);
            this.encedido = true;
        }
        else alert(`El teléfono móvil de color ${this.color} está apagado`);
    }

    tomarFotos = ()=>{
        if(this.encedido){
            alert("El teléfono acaba de tomar una foto");
        }
        else alert("El teléfono está apagado y no puede tomar una foto");
    }

    grabar = ()=>{
        if(this.encedido){
            alert("El teléfono está grabando...");
        }
        else alert("El teléfono está apagado y no puede grabar");
    }


}


const tel1 = new Movil("Rojo",0.800,"15 pulgadas","4K","16GB");
const tel2 = new Movil("Azul",0.500,"13 pulgadas","4K","8GB");
const tel3 = new Movil("Amarillo",1.200,"17 pulgadas","4K","32GB");

tel1.mostrarInfo();
tel2.mostrarInfo();
tel3.mostrarInfo();

tel1.encender();
tel2.apagar();

//PROBAR CON EL RESTO DE FUNCIONES...