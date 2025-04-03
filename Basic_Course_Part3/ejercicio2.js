/*
B) Rodrigo  vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir...
Al otro día comienzan las clases del grado de la universidad (porque Rodrigo quiere ser programador y se incribió en la facultad de ingeniería para estudiar desarrollo de videojuegos).
En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad:
se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.

 - Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase. 
 - Pasados los 30 días mostrar la situación final de todos los alumnos (Numero total de presentes y ausentes). 
 - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que está suspenso. 
 */

let numeroAlumnos = prompt("Cuantos alumnos son en clase?")
let alumnos = {};
for(let i = 0; i < numeroAlumnos;i++){
    alumnos[i] = [prompt("Como se llama el alumno " + (i+1)),0];
}


const tomarAsitencia = (nombre,p)=>{
    let presencia = prompt("Está presente " + nombre + " ? (P/A)")
    if(presencia === "P" || presencia ==="p")
        alumnos[p][1]++;
}


const numeroDias = 3;
for(let i = 0; i < numeroDias;i++){
    for(let alumno in alumnos){
        tomarAsitencia(alumnos[alumno][0],alumno)
    }
}

for(alumno in alumnos){
    let resultado = `${alumnos[alumno][0]}: <br>
    ______________ PRESENTE ${alumnos[alumno][1]}<br>
    ______________ AUSENTE ${numeroDias - alumnos[alumno][1]}<br>`


    if(numeroDias - alumnos[alumno][1] > numeroDias*0.1){
        resultado+=`<b style= 'color: red'>HAS SUSPENDIDO</b><br><br>`;
    }
    document.write(resultado);
}
