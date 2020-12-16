function mostrar()
{
	let vEdad;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);


	if (vEdad <= 12)
	{
		alert("La persona es menor de edad");
	}
	
	else if (vEdad >= 13 && vEdad <= 17)
	{
		alert("La persona es adolescente");
	}

	else 
	{
		alert("La persona es mayor de edad");
	}



}//FIN DE LA FUNCIÓN