/* A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que Rodrigo le dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con
este milllón compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas...
—
Dejar pasar solo a los mayores de edad
La primer persona que entre despues de las 2 AM, no paga. */

let free = false;


const validarCliente = (time)=>{
    let edad = prompt("Cuál es tu edad?");

    if(edad>=18){
        if(!free && (time>=2 && time < 6)){
            free = true;
            alert("Eres la primera persona que entra después de las dos asi que puedes pasar gratis")
        }
        else alert("Tienes que pagar la entrada para poder pasar");
    }
    else alert("Lo siento pero no eres mayor de edad, no puedes pasar");
}
validarCliente(1);
validarCliente(3);
validarCliente(3);
validarCliente(3);


//EJERCICIO TERMINADO