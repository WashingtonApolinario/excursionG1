/**
 * Control para crear usuarios nuevos
 */


var arregloUsuarios;

if(localStorage.getItem('arregloUsuarios') != null){
    arregloUsuarios = JSON.parse(localStorage.getItem('arregloUsuarios'));
    //Obtener los usuarios del localStorage

}

dibujarTablaUsuarios();
dibujarTablaExcursiones();
dibujarTablaPreguntas();

function dibujarTablaUsuarios() {

    $("#usuarios").empty();

    $('#usuarios').append($('<tr>')
        .append($('<th>').append("Usuario"))
        .append($('<th>').append("Contraseña"))
        .append($('<th>').append("Editar"))
        .append($('<th>').append("Eliminar"))
    )
    listarUsuarios();
}

function dibujarTablaExcursiones() {

    $("#excursiones").empty();

    $('#excursiones').append($('<tr>')
    .append($('<th>').append("Usuario"))
        .append($('<th>').append("Titulo"))
        .append($('<th>').append("Descripcion"))
        .append($('<th>').append("Credito"))
        .append($('<th>').append("Portada"))
        .append($('<th>').append("Video"))
        .append($('<th>').append("Editar"))
        .append($('<th>').append("Eliminar"))
    )
    listarExcursiones();
}

function listarExcursiones() {
//alert("ok..");

    $.each(arregloUsuarios, function(index_usuario, usuario){

        $.each(usuario.excursiones, function(indice_excursion, excursion){

            $('#excursiones').append($('<tr>')
            .append($('<td>').append(usuario.usuario))
            .append($('<td>').append(excursion.titulo))
            .append($('<td>').append(excursion.descripcion))
            .append($('<td>').append(excursion.credito))
            .append($('<td>').append(`<img src=${excursion.portada} class="lista-img">`))
            .append($('<td>').append(excursion.video))
            .append($('<td>').append(`<button onclick=editarExcursion(${index_usuario},${indice_excursion})>Editar</button>`))
            .append($('<td>').append(`<button onclick=eliminarExcursion(${index_usuario},${indice_excursion})>Eliminar</button>`))
            )
        })
    })
}

function dibujarTablaPreguntas() {

    $("#preguntas").empty();

    $('#preguntas').append($('<tr>')
    .append($('<th>').append("Usuario"))
        .append($('<th>').append("Excursion"))
        .append($('<th>').append("Pregunta"))
        .append($('<th>').append("Opcion 1"))
        .append($('<th>').append("Opcion 2"))
        .append($('<th>').append("Opcion 3"))
        .append($('<th>').append("Opcion 4"))
        /*.append($('<th>').append("Eliminar"))*/
    )
    listarPreguntas();
}

function listarPreguntas() {
//alert("ok..");

    $.each(arregloUsuarios, function(index_usuario, usuario){

        $.each(usuario.excursiones, function(indice_excursion, excursion){

            $('#preguntas').append($('<tr>')
            .append($('<td>').append(usuario.usuario))
            .append($('<td>').append(excursion.titulo))
            .append($('<td>').append(excursion.pregunta.pregunta))
            .append($('<td>').append(`<img src=${excursion.pregunta.opciones[0].url} class="lista-img">`))
            .append($('<td>').append(`<img src=${excursion.pregunta.opciones[1].url} class="lista-img">`))
            .append($('<td>').append(`<img src=${excursion.pregunta.opciones[2].url} class="lista-img">`))
            .append($('<td>').append(`<img src=${excursion.pregunta.opciones[3].url} class="lista-img">`))
            .append($('<td>').append(`<button onclick=editarPregunta(${index_usuario},${indice_excursion})>Editar</button>`))
            //.append($('<td>').append(`<button onclick=eliminarPregunta(${index_usuario},${indice_excursion})>Eliminar</button>`))
            )
        })
    })
}


function editarPregunta(index_usuario, index_excursion){

    $("#editar-pregunta").show();
    $(".editar-pregunta").show();
    localStorage.setItem("index-edit", index_usuario); //index del usuario

    localStorage.setItem("index-excursion-edit", index_excursion);

    //console.log(arregloUsuarios[index_usuario].excursiones[index_excursion])

    //$("#excursion-titulo-pregunta").val(arregloUsuarios[index_usuario].excursiones[index_excursion].titulo);

    $("#pregunta-descripcion").val(arregloUsuarios[index_usuario].excursiones[index_excursion].pregunta.pregunta);

    $("#pregunta-opcion-1").attr("src", arregloUsuarios[index_usuario].excursiones[index_excursion].pregunta.opciones[0].url);

    $("#pregunta-opcion-2").attr("src", arregloUsuarios[index_usuario].excursiones[index_excursion].pregunta.opciones[1].url);

    $("#pregunta-opcion-3").attr("src",arregloUsuarios[index_usuario].excursiones[index_excursion].pregunta.opciones[2].url);
    //excursion.pregunta.opciones[0].url

    $("#pregunta-opcion-4").attr("src", arregloUsuarios[index_usuario].excursiones[index_excursion].pregunta.opciones[3].url);

    $("#usuario-select-editar").empty();

}

$("#guardar-pregunta").click(function(){


    if(localStorage.getItem("index-excursion-edit")!=null && localStorage.getItem("index-edit") !=null){

        /*
        localStorage.setItem("index-edit", index_usuario); //index del usuario

    localStorage.setItem("index-excursion-edit", index_excursion);
    */

        $("#editar-pregunta").hide();
        $(".editar-pregunta").hide();


        //let titulo = $("#excursion-titulo-pregunta").val();
        let descripcion = $("#pregunta-descripcion").val();
        let opcion1 = $("#pregunta-opcion-1").attr("src");
        //let portada = $("#excursion-portada").val();
        let opcion2 = $("#pregunta-opcion-2").attr("src");
        let opcion3 = $("#pregunta-opcion-3").attr("src");
        let opcion4 = $("#pregunta-opcion-4").attr("src");


        let index_user = localStorage.getItem("index-edit");
        let index_excursion = localStorage.getItem("index-excursion-edit");

        let pregunta = arregloUsuarios[index_user].excursiones[index_excursion].pregunta;

        /*let tmp_excursion = new Excursion(titulo, descripcion, credito, portada, video, pregunta);*/

        let tmp_opcion1= new Opcion(pregunta.opciones[0].descripcion, opcion1)
        let tmp_opcion2= new Opcion(pregunta.opciones[1].descripcion, opcion2)
        let tmp_opcion3= new Opcion(pregunta.opciones[2].descripcion, opcion3)
        let tmp_opcion4= new Opcion(pregunta.opciones[3].descripcion, opcion4)



        let tmp_pregunta = new Pregunta(descripcion, pregunta.audio, [tmp_opcion1, tmp_opcion2, tmp_opcion3, tmp_opcion4], pregunta.respuesta)

        arregloUsuarios[index_user].excursiones[index_excursion].pregunta = tmp_pregunta;

        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        /*dibujarTablaExcursiones();*/
        dibujarTablaPreguntas();

        localStorage.removeItem("index-edit")
        localStorage.removeItem("index-excursion-edit")

        /*$("#excursion-titulo").val("");
        $("#excursion-descripcion").val("");
        $("#excursion-credito").val("");
        $("#excursion-portada").attr("src", "")
        //$("#excursion-portada").val("");
        $("#excursion-video").val("");*/


    }else{
        alert("No hay excursion seleccionada para editar")
    }

})




$("#guardar-excursion").click(function(){


    if(localStorage.getItem("index-excursion-edit")!=null && localStorage.getItem("index-edit") !=null && $("#usuario-select-editar").val() != null){

        $("#editar-excursion").hide();


        let titulo = $("#excursion-titulo").val();
        let descripcion = $("#excursion-descripcion").val();
        let credito = $("#excursion-credito").val();
        //let portada = $("#excursion-portada").val();
        let portada = $("#excursion-portada").attr("src");
        let video = $("#excursion-video").val();
        let id_user = $("#usuario-select-editar").val();


        let index_user = localStorage.getItem("index-edit");
        let index_excursion = localStorage.getItem("index-excursion-edit");

        let pregunta = arregloUsuarios[index_user].excursiones[index_excursion].pregunta;

        let tmp_excursion = new Excursion(titulo, descripcion, credito, portada, video, pregunta);

        if(id_user!=index_user){
            arregloUsuarios[index_user].excursiones.splice(index_excursion, 1);
            //index_user = id_user;
            arregloUsuarios[id_user].excursiones.push(tmp_excursion);
        }else{
            arregloUsuarios[index_user].excursiones[index_excursion] = tmp_excursion;
        }

        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        dibujarTablaExcursiones();

        localStorage.removeItem("index-edit")
        localStorage.removeItem("index-excursion-edit")

        $("#excursion-titulo").val("");
        $("#excursion-descripcion").val("");
        $("#excursion-credito").val("");
        $("#excursion-portada").attr("src", "")
        //$("#excursion-portada").val("");
        $("#excursion-video").val("");


    }else{
        alert("No hay excursion seleccionada para editar")
    }

})

function editarExcursion(index_usuario, index_excursion){

    $("#editar-excursion").show();
    $(".editar-excursion").show();
    localStorage.setItem("index-edit", index_usuario); //index del usuario

    localStorage.setItem("index-excursion-edit", index_excursion);

    console.log(arregloUsuarios[index_usuario].excursiones[index_excursion])

    $("#excursion-titulo").val(arregloUsuarios[index_usuario].excursiones[index_excursion].titulo);

    $("#excursion-descripcion").val(arregloUsuarios[index_usuario].excursiones[index_excursion].descripcion);

    $("#excursion-credito").val(arregloUsuarios[index_usuario].excursiones[index_excursion].credito);

    $("#excursion-portada").attr("src", arregloUsuarios[index_usuario].excursiones[index_excursion].portada);

    $("#excursion-video").val(arregloUsuarios[index_usuario].excursiones[index_excursion].video);

    $("#usuario-select-editar").empty();

    $.each(arregloUsuarios, function(index, usuario){

        $("#usuario-select-editar").append('<option value="'+index+'"+>'+usuario.usuario+'</option>');
    })

    $("#usuario-select-editar").val(index_usuario)

    
   

}

function eliminarExcursion(index_usuario, index_excursion){

    arregloUsuarios[index_usuario].excursiones.splice(index_excursion, 1)

    localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

    dibujarTablaExcursiones();

}

function listarUsuarios() {
    $.each(arregloUsuarios, function(index, usuario){
    $('#usuarios').append($('<tr>')
        .append($('<td>').append(usuario.usuario))
        .append($('<td>').append(usuario.clave))
        .append($("<td>").append(`<button onclick=editarUsuario(${index})>Editar</button>`))
        .append($("<td>").append(`<button onclick=eliminarUsuario(${index})>Eliminar</button>`))
    )
    })
}

$("#guardar-usuario").click(function(){
    if(localStorage.getItem("index-edit")!=null){
        let user = $("#usuario-").val();
        let clave = $("#clave-").val();
        let excursiones = arregloUsuarios[localStorage.getItem("index-edit")].excursiones;

        let user_edit = new Usuario(user, clave, excursiones);

        arregloUsuarios[localStorage.getItem("index-edit")] = user_edit;

        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        dibujarTablaUsuarios();

        localStorage.removeItem("index-edit")

        $("#usuario-").val("");
        $("#clave-").val("");

        $("#editar-usuario").hide();
        $(".editar-usuario").hide();

    }else{
        alert("No hay usuario seleccionado para editar")
    }
})

function editarUsuario(index) {
    localStorage.setItem("index-edit", index);

   $("#editar-usuario").show();
    $(".editar-usuario").show();
    
    
   
    
    $("#usuario-").val(arregloUsuarios[index].usuario);
    $("#clave-").val(arregloUsuarios[index].clave);
    
    
}
function eliminarUsuario(index) {
    arregloUsuarios.splice(index, 1)

    localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

    dibujarTablaUsuarios();
}

$("#btn-agregar-usuario").click(function(){


    let user = $("#usuario-a").val();
    let clave = $("#clave-a").val();

    if(user!="" && clave !=""){

        let user_new = new Usuario(user, clave, []);

        arregloUsuarios.push(user_new);
        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        dibujarTablaUsuarios();

        $("#agregar-usuario").hide();
        $(".agregar-usuario").hide();

    }else{
        alert("Llene los campos")
    }

})

$("#guardar-nueva-pregunta").click(function(){

    let descripcion = $("#pregunta-descripcion").val();
        let opcion1 = $("#pregunta-opcion-1-agregar").attr("src");
        //let portada = $("#excursion-portada").val();
        let opcion2 = $("#pregunta-opcion-2-agregar").attr("src");
        let opcion3 = $("#pregunta-opcion-3-agregar").attr("src");
        let opcion4 = $("#pregunta-opcion-4-agregar").attr("src");   


    /*if(descripcion!="" && opcion1 !="" && opcion2 !="" && opcion3 !="" && opcion4 !=""){*/

        let new_excursion = new Pregunta();

        //let index_usuario = $("#usuario-select").val();
        //arregloUsuarios[index_usuario].excursiones.push(new_excursion);


        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        /*dibujarTablaExcursiones();*/
        dibujarTablaPreguntas();

        $("#agregar-pregunta").hide();
        $(".agregar-pregunta").hide();

    /*}else{
        alert("Llene los campos")
    }*/

})

$("#guardar-nueva-excursion").click(function(){

    let titulo = $("#excursion-titulo-a").val();
    let descripcion = $("#excursion-descripcion-a").val();
    let credito = $("#excursion-credito-a").val();
    //let portada = $("#excursion-portada-a").val();

    let img_portada = $("#portada-excursion-agregar").attr("src");

    //console.log(img_portada)

    let video = $("#excursion-video-a").val();

    if(titulo!="" && descripcion !="" && credito !="" && img_portada !="#" && video !=""){

        let new_excursion = new Excursion(titulo, descripcion, credito, img_portada, video);

        console.log(new_excursion)
        let index_usuario = $("#usuario-select").val();

        arregloUsuarios[index_usuario].excursiones.push(new_excursion);


        localStorage.setItem('arregloUsuarios', JSON.stringify(arregloUsuarios));

        dibujarTablaExcursiones();

        $("#agregar-excursion").hide();

    }else{
        alert("Llene los campos")
    }

})


$("#btn-nuevo").click(function(){
    $("#agregar-usuario").show();
     $(".agregar-usuario").show();
})

$("#btn-nueva-excursion").click(function(){
    $("#agregar-excursion").show();
    $(".agregar-excursion").show();

    
    
    $("#usuario-select").empty();

    $.each(arregloUsuarios, function(index, usuario){

        $("#usuario-select").append('<option value="'+index+'"+>'+usuario.usuario+'</option>');

    })
    
    
})

$("#btn-nueva-pregunta").click(function(){
    $("#agregar-pregunta").show();
    $(".agregar-pregunta").show();

    
    
    //$("#usuario-select").empty();

    /*$.each(arregloUsuarios, function(index, usuario){

        $("#usuario-select").append('<option value="'+index+'"+>'+usuario.usuario+'</option>');

    })*/
    
})


function agregarUsuario(usuario) {
    arregloUsuarios.push(usuario);
}

 /**
  * Control para agregar excursiones
  */

 $("#btn-descargar-json").on('click', function() {

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem("arregloUsuarios"));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();

    /*let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem("arregloUsuarios"));

    $("#downloadAnchorElem").attr("href", dataStr).attr("download", "archivo.json");
    let elemento = $("#downloadAnchorElem");
    elemento.click();*/
})

function readURL(input, id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            console.log(e.target.result);

            $('#'+id).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$("#imgInp").change(function(){
    readURL(this, "portada-excursion-agregar");
});

$("#editarPortadaExcursion").change(function(){
    readURL(this, "excursion-portada");
})

$("#preguntaOpcion1").change(function(){
    readURL(this, "pregunta-opcion-1")
})

$("#preguntaOpcion2").change(function(){
    readURL(this, "pregunta-opcion-2")
})

$("#preguntaOpcion3").change(function(){
    readURL(this, "pregunta-opcion-3")
})

$("#preguntaOpcion4").change(function(){
    readURL(this, "pregunta-opcion-4")
})
$("#preguntaOpcion1Agregar").change(function(){
    readURL(this, "pregunta-opcion-1-agregar")
})
$("#preguntaOpcion2Agregar").change(function(){
    readURL(this, "pregunta-opcion-2-agregar")
})
$("#preguntaOpcion3Agregar").change(function(){
    readURL(this, "pregunta-opcion-3-agregar")
})

$("#preguntaOpcion4Agregar").change(function(){
    readURL(this, "pregunta-opcion-4-agregar")
})

// botones cancelar para cerrar modal



$("#btnCancelarNuevoUsuario").on('click', function(){
    $("#agregar-usuario").hide();
     $(".agregar-usuario").hide();
});

$("#btnCancelarEditarUsuario").on('click', function(){
    $("#editar-usuario").hide();
     $(".editar-usuario").hide();
});

$("#btnCancelarNuevaExcursion").on('click', function(){
    $("#agregar-excursion").hide();
     $(".agregar-excursion").hide();
});

$("#btnCancelarEditarExcursion").on('click', function(){
    $("#editar-excursion").hide();
     $(".editar-excursion").hide();
});

$("#btnCancelarEditarPregunta").on('click', function(){
    $("#editar-pregunta").hide();
     $(".editar-pregunta").hide();
});

$("#btnCancelarNuevaPregunta").on('click', function(){
    $("#agregar-pregunta").hide();
     $(".agregar-pregunta").hide();
});