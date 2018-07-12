class Usuario {
    constructor(usuario, clave, excursiones) {
        this.usuario = usuario;
        this.clave = clave;
        this.excursiones = excursiones;
    }
    agregarExcursion(excursion) {
        this.excursiones.push(excursion);
    }
    eliminarExcursion(excursion_posicion) {
        this.excursiones
    }
}
class Excursion {
    constructor(titulo, descripcion, credito, portada, video, pregunta={pregunta:"¿Elige el mayor de todos?", opciones:["5", "1", "0", "2"], respuesta:0}) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.credito = credito;
        this.portada = portada;
        this.video = video;
        this.pregunta = pregunta;
    }
}

class Pregunta {
    constructor(pregunta, opciones, respuesta=0) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }
}