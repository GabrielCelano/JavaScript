function mostrar()
{
	let vEdad; 

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	 
	if (!(vEdad > 13 && vEdad < 17))
	{
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN