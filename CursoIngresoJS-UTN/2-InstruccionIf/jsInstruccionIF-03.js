function mostrar()
{
	let vEdad; 

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	 
	if (vEdad >= 18)
	{
		alert("La persona es mayor de edad");
	}

	else
	{
		alert("La persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN