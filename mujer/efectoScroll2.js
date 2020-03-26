$(document).ready(function(){ 

var indumentaria = $('#indumentaria-btn').offset().top,
		ubicacion = $('#ubicacion-btn').offset().top;


		$('#btn-indumentaria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: indumentaria
		}, 1000);

	});		

		$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 1000);

	});

});