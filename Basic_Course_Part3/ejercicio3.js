const sumar = (num1,num2) =>{
    return parseInt(num1)+parseInt(num2);
}
const restar = (num1,num2) =>{
    return parseInt(num1)-parseInt(num2);
}
const dividir = (num1,num2) =>{
    return parseInt(num1)/parseInt(num2);
}
const multiplicar = (num1,num2) =>{
    return parseInt(num1)*parseInt(num2);
}

const pedirDatos = () => {
    datos = [prompt("Dime el primer numero para la operación : "),prompt("Dime el primer numero para la operación : ")]
    return datos;
}


alert("Qué operación quieres realizar?");
let operacion = prompt("1-Sumar , 2-Restar, 3-Dividir, 4-Multiplicar");
datos = pedirDatos();
switch(operacion){
    case "1" : {
        let resultado = sumar(datos[0],datos[1]);
        alert("El resultado de la suma es : " + resultado);
        break;
    }
    case "2" : {
        let resultado = restar(datos[0],datos[1]);
        alert("El resultado de la resta es : " + resultado);
        break;
    }
    case "3" : {
        let resultado = dividir(datos[0],datos[1]);
        alert("El resultado de la division es : " + resultado);
        break;
    }
    case "4" : {
        let resultado = multiplicar(datos[0],datos[1]);
        alert("El resultado de la multiplicacion es : " + resultado);
        break;
    }
    default : alert("El numero introducido no es válio");
}