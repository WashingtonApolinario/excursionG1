var arregloUsuarios = [];
var arregloExcursiones1 = [];
var arregloExcursiones2 = [];
var arregloPreguntasExcursion1 = [];

var arregloPreguntasExcursion2 = [];


let opcionesPregunta1 = ["A", "B", "C", "D"]
let pregunta1 = new Pregunta("Despues de la B sigue?", opcionesPregunta1, 2);


let opcionesPregunta2 = ["5", "2", "1", "3"]
let pregunta2 = new Pregunta("¿1+1?", opcionesPregunta2, 1);


let opcionesPregunta3 = ["0", "10", "2", "1"]
let pregunta3 = new Pregunta("¿Cuantos animnales viste?", opcionesPregunta2, 1);


let excursion1 = new Excursion("Visita al museo!", "Descripcion 1", "Creditos 1", "./images/excursion1.gif","./videos/video1.mp4", pregunta1)

let excursion2 = new Excursion("Viaje a la sierra", "Descripcion 2", "Creditos 2", "./images/excursion2.gif","./videos/video2.mp4", pregunta2)

let excursion3 = new Excursion("Visitando el campo", "Descripcion 1", "Creditos 1", "./images/excursion3.gif","./videos/video3.mp4", pregunta3)

let excursion4 = new Excursion("Viaje a la playa", "Descripcion 1", "Creditos 1", "./images/excursion4.gif","./videos/video4.mp4", pregunta1)

arregloExcursiones1.push(excursion1);
arregloExcursiones1.push(excursion2);
arregloExcursiones1.push(excursion3);
arregloExcursiones1.push(excursion4);


arregloExcursiones2.push(excursion3);

let user1 = new Usuario("user", "clave", arregloExcursiones1);
let user2 = new Usuario("test", "test", arregloExcursiones2);
let user3 = new Usuario("teste", "teste", arregloExcursiones2);

arregloUsuarios.push(user1)
arregloUsuarios.push(user2)
arregloUsuarios.push(user3)

//var a=JSON.stringify(arregloUsuarios);
//alert(a);
//
if(localStorage.getItem('arregloUsuarios') == null){
    localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));
    //Guardar el objeto en localStorage para tener acceso
}