function mostrar()
{
	let vEdad; let vEstado;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstado = document.getElementById("estadoCivil").value;

	if (vEdad < 18 && !(vEstado == "Soltero")) 
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN