$(function(){   /*Es una función auto invocada.Se ejecutará automaticamente cuando nuestra página web cargue*/
    var boton = $('#btn-menu');
    var fondo_enlace = $('#fondo-enlace');


    boton.on('click', function(e){ /* Cuando se dé un click, aparecerá la clase active */
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });

    fondo_enlace.on('click', function(e){/* Cuando se dé un click se quitará la clase */ 
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
}())