function mostrar() {
	let vEdad; let vEstado;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstado = document.getElementById("estadoCivil").value;

	if (vEdad >= 18 && vEstado == "Soltero") 
	{
		alert("Es soltero y no es menor.");
	}



}//FIN DE LA FUNCIÓN