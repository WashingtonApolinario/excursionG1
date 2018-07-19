class Usuario {
    constructor(usuario, clave, excursiones) {
        this.usuario = usuario;
        this.clave = clave;
        this.excursiones = excursiones;
    }
    /*agregarExcursion(excursion) {
        this.excursiones.push(excursion);
    }
    eliminarExcursion(excursion_posicion) {
        this.excursiones
    }*/
}
class Excursion {
    constructor(titulo, descripcion, credito, portada, video, _pregunta=null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.credito = credito;
        this.portada = portada;
        this.video = video;
        this.pregunta = _pregunta!=null ? _pregunta :
            new Pregunta("¿Escriba su pregunta?",[ new Opcion('Opcion1',"./images/uno.jpg"), new Opcion('Opcion2',""), new Opcion('Opcion3',""), new Opcion('Opcion4',"")], 0)
        ;
        //let saludo;
        //saludo = (a>b) ? "hola" : "chao"; //Operador ternario
        /*if(a>b) {
            saludo= "hola"
        }else{
            saludo= "chao"
        }*/
    }
}

class Pregunta {
    constructor(pregunta, opciones, respuesta=0) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }
}

class Opcion {
    constructor(descripcion, url) {
        this.descripcion= descripcion;
        this.url = url;
    }
}