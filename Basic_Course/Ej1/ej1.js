/** 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado pero hay un problema : los precios
 * no están al lado de cada estante con su respectivo helado.
 * Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, asi que... veamos como podemos ayudarlos **/


//Roberto tiene 1,75 euros
//Juan tiene 1,7 euros
//Mikel tiene 3,5 euros

//Los precios de los helados son los siguientes:
/*
-> Helado de chocolate : 0,6€
-> Helado de pistacho : 1€
-> Helado de vainilla : 1.6€
-> Helado de limón : 1.7€
-> Helado de naranja : 1.8€
-> Helado de pitufo : 2.9€
-> Helado de kinder bueno : 2.9€
*/

//Pedirles que ingresen el dinero que tienen y mostrarles el helado más caro que pueden comprar
//Si hay dos o más con el mismo precio, mostrar todos
//Mikel quiere saber cual es el dinero que sobra

let dineroRoberto = prompt("Cuanto dinero tienes Roberto? :")
let dineroJuan = prompt("Cuanto dinero tienes Roberto? :")
let dineroMikel = prompt("Cuanto dinero tienes Roberto? :")
let dineroHeladoMasCaro = 0

switch(dineroRoberto){
    case dineroRoberto<0.6 : 
        console.log("No tienes dinero suficiente para ningún helado")
        break;
    case dineroRoberto<1 : 
        console.log("Tienes para el helado de chocolate")
        dineroHeladoMasCaro = 0.6
        break;
    case dineroRoberto<1.6 : 
        console.log("Tienes para el helado de pistacho")
        dineroHeladoMasCaro = 1
        break;
    case dineroRoberto<1.7 : 
        console.log("Tienes para el helado de vainilla")
        dineroHeladoMasCaro = 1.6
        break;
    case dineroRoberto<1.8 : 
        console.log("Tienes para el helado de limón")
        dineroHeladoMasCaro = 1.7
        break;
    case dineroRoberto<2.9 : 
        console.log("Tienes para el helado de naranja")
        dineroHeladoMasCaro = 1.8
        break;
    case dineroRoberto>=2,9 : 
        console.log("Tienes para el helado de kinder bueno y el de pitufo")
        dineroHeladoMasCaro = 2.9
        break;
}


/* ... Hacer lo mismo para el resto de personas*/

let vueltas = dineroRoberto - dineroHeladoMasCaro
console.log("Las vueltas del helado que has comprado son : " + vueltas)