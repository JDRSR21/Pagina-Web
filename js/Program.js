this.logueado = false;

$("#entrar").click(function () {
	if ($("#usuario").val() == "Admin" && $("#contraseña").val() == '1234'){
		logueado = true;
		if (logueado == true) {
			window.location = "./Pages/Inicio.html";
		}
	}else{
		Swal.fire('Error');
	}
});
$(".btn").hover(function () {
	$(".btn").fadeIn();
});
window.addEventListener('load',function () {
	$(".container").show(1000);
});

