var arregloUsuarios = [];
var arregloExcursiones1 = [];
var arregloExcursiones2 = [];


let pregunta1 = new Pregunta("Despues de la B sigue?", "./audio/audio.mp3",
[ new Opcion('A',""), new Opcion('2',""), new Opcion('3',""), new Opcion('5',"")]
, 2);

let pregunta2 = new Pregunta("Adivina que animal hace MUU MUU seleccionalo", "./audio/audio.mp3",
[ new Opcion('gallina',"./images/gallina.png"), new Opcion('vaca',"./images/vaca.png"), new Opcion('cerdo',"./images/cerdo.png"), new Opcion('oveja',"./images/oveja.png")]
, 1);

let pregunta3 = new Pregunta("¿Cuál número es el 2? seleccionalo", "./audio/preg_numero.mp3",
[new Opcion('dos',"./images/dos.png"), new Opcion('cuatro',"./images/cuatro.png"), new Opcion('uno',"./images/uno.png"), new Opcion('cinco',"./images/cinco.png")]
, 0);


let excursion1 = new Excursion("Visita al museo!", "Descripcion 1", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion1.gif","./videos/video1.mp4", pregunta1)

let excursion2 = new Excursion("Aprendiendo los animales", "animales de granja", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion2.gif","./videos/video2.mp4", pregunta2)

let excursion3 = new Excursion("Visitando el campo", "Descripcion 1", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion3.gif","./videos/video3.mp4", pregunta3)

let excursion4 = new Excursion("Aprendiendo los numeros", "numeros del uno al cinco", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion4.gif","./videos/video4.mp4", pregunta3)

//arregloExcursiones1.push(excursion1);
arregloExcursiones1.push(excursion2);
//arregloExcursiones1.push(excursion3);
arregloExcursiones1.push(excursion4);


arregloExcursiones2.push(excursion3);

let user1 = new Usuario("user", "clave",  arregloExcursiones1);
let user2 = new Usuario("test", "test",arregloExcursiones2);
let user3 = new Usuario("teste", "teste", arregloExcursiones2);
let user4 = new Usuario("teste", "teste", arregloExcursiones2);

arregloUsuarios.push(user1)
arregloUsuarios.push(user2)
arregloUsuarios.push(user3)


//var a=JSON.stringify(arregloUsuarios);
//alert(a);
//

//console.log(arregloUsuarios)
if(localStorage.getItem('arregloUsuarios') == null){

    localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));
    //Guardar el objeto en localStorage para tener acceso
}
