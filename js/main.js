var arregloUsuarios = [];
var arregloExcursiones1 = [];
var arregloExcursiones2 = [];


let pregunta1 = new Pregunta("Despues de la B sigue?", 
[ new Opcion('A',""), new Opcion('2',""), new Opcion('3',""), new Opcion('5',"")]
, 2);

let pregunta2 = new Pregunta("Adivina que animal hace MUU MUU seleccionalo", 
[ new Opcion('gallina',"./images/gallina.png"), new Opcion('vaca',"./images/vaca.png"), new Opcion('cerdo',"./images/cerdo.png"), new Opcion('oveja',"./images/oveja.png")]
, 1);

let pregunta3 = new Pregunta("Selecciona un la flor roja!", 
[new Opcion('dos',"./images/flor-roja.jpg"), new Opcion('cuatro',"./images/flor-azul.jpg"), new Opcion('uno',"./images/flor-verde.jpg"), new Opcion('cinco',"./images/flor-amarilla.jpg")]
, 0);


let excursion1 = new Excursion("Visita al museo!", "Descripcion 1", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion1.gif","https://www.youtube.com/embed/Sqv-21DAS04", pregunta1)

let excursion2 = new Excursion("Aprendiendo los animales", "animales de granja", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion2.gif","https://www.youtube.com/embed/Sqv-21DAS04", pregunta2)

let excursion3 = new Excursion("Colores", "Descripcion 1", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion3.gif","https://www.youtube.com/embed/pNBJpqdnSqI", pregunta3)

let excursion4 = new Excursion("Colores", "numeros del uno al cinco", "Carlos Mite, Washington Apolinario, Cesar Arteaga", "./images/excursion4.gif","https://www.youtube.com/embed/pNBJpqdnSqI", pregunta3)

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
