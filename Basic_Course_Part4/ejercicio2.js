/*B) Rodrigo no está satisfecho con los celulares así que decide ir a la sección de telefonos de alta gama, 
donde va a poder encontrar los telefonos mas caros del lugar, así que al entrar vió dos telefonos que le encantaron, 
estos 2 telefonos de alta gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores características y 
además pueden grabar en camara super lenta, tiene reconocimiento facial y'una camara extra.

CREAR SOLUCIONES
-> Implementar todas estas cualidades en los celulares de alta gama */

class MovilAltaGama extends Movil{

    constructor(color,peso,resolucionPantalla,resolucionCamara,resolucionCamaraExtra,ram){
        super(color,peso,resolucionPantalla,resolucionCamara,ram);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }

    mostrarInfo = ()=>{
        return super.mostrarInfo + ` Tiene esta resolución en la cámara extra : ${this.resolucionCamaraExtra} <br>`;
    }


    grabarCamaraLenta =()=>{
        //TO DO funcionalidad de grabar en camara lenta
    }

    reconocimientoFacial = ()=>{
        //TO DO funcionalidad de reconocimiento facial 
    }
}