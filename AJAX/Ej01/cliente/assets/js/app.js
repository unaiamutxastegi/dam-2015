$(function(){
	var $ticker = $('#ticker');
	var $detener = $('#detener');
	var peticionAjax = function(){
/*		$.ajax('../servidor/generaContenidos.php',{
			success : function(data,status,jqXHR){
				$ticker.text(data);
			}
		});*/

		$.get('../servidor/generaContenidos.php',null,
			function(data,textStatus,jqXHR){
				$ticker.text(data);
			}
		);
	};

	var interval = setInterval(peticionAjax,1000);

	$detener.on('click',function(e){
		clearInterval(interval);
	});
});
