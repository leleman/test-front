$(function() {
	var _date = new Date();
	var minutos = _date.getMinutes();
	var horas = _date.getHours();
	var dia = _date.getDay();
	var diaMes = _date.getDate();
	var mes = _date.getMonth();
	
	if(minutos < 10){
		minutos = "0" + minutos;
	}

	if(diaMes < 10){
		diaMes = "0" + minutos
	}

	switch (dia) {
		case 0:
			dia = "Domingo";
			break;
		case 1:
			dia = "Segunda";
			break;
		case 2:
			dia = "Terça";
			break;
		case 3:
			dia = "Quarta";
			break;
		case 4:
			dia = "Quinta";
			break;
		case 5:
			dia = "Sexta";
			break;
		case 6:
			dia = "Sábado";
			break;
	}

	switch (mes) {
		case 0:
			mes = "Janeiro";
			break;
		case 1:
			mes = "Fevereiro";
			break;
		case 2:
			mes = "Março";
			break;
		case 3:
			mes = "Abril";
			break;
		case 4:
			mes = "Maio";
			break;
		case 5:
			mes = "Junho";
			break;
		case 6:
			mes = "Julho";
			break;
		case 7:
			mes = "Agosto";
			break;
		case 8:
			mes = "Setembro";
			break;
		case 9:
			mes = "Outubro";
			break;
		case 10:
			mes = "Novembro";
			break;
		case 11:
			mes = "Dezembro";
			break;
	}

	$(".time-div").append(horas + ":" + minutos)
	$(".date-div").append(dia + ", " + diaMes + " de " + mes)
});

$(document).on("click", ".btn-get", function() {
	$.ajax({
		url: encodeURI("https://api.github.com/users/leleman"),
		method: "GET",
		headers: {
			"Accept": "application/json; odata=verbose"
		},
		beforeSend: function() {
			$(".time-row").hide();
			$(".unblock-row").hide();
			$(".footer-row").hide();
		},
		success: function(data) {
			if (!data.email) {
				data.email = "leonardo.bernardo10@gmail.com"
			}
			$(".header-row").after(
				'<div class="usuario">' + 
				'<div class="row user-row">' +
					'<div class="imagem-avatar">' + 
					'<div class="col-md-12 text-center">' +
						'<img width="150px" class="img-circle" alt="ProfilePhoto" src="' + data.avatar_url + '"/><br/>' +
					'</div>' +
					'</div>' +
					'<div class="nome-profile">' +
					'<div class="col-md-12 text-center"> <h1 class="name">' +
						data.name + '</h1> <br/>' +
					'</div>' + 
					'</div>' +
					'<div class="email-profile">' +
					'<div class="col-md-12 text-center">' +
						data.email + '<br/>' +
					'</div>' +
					'</div>' +
					'<div class="col-md-12 text-center">' +
						'<a role="button" class="btn btn-sm btn-danger btn-back">Retornar</a>' +
					'</div>' + '</div>' + 
				'</div>');
		},
		error: function(error) {
			console.log(error);
		}
	});
});

$(document).on("click", ".btn-back", function (){
	$(".time-row").show();
	$(".unblock-row").show();
	$(".footer-row").show();
	$(".user-row").remove();
});